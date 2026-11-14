---
slug: ADR-0006-arquitectura-aws-produccion
locale: es
id: ADR-0006
shortTitle: "Arquitectura AWS para producción"
title: "Arquitectura AWS para producción"
date: 2026-04-26
status: Aceptado
translation: ADR-0006-aws-production-architecture
---

## Dominio y URLs

Dominio de producción: `clientes.imaquinaria.cl`

Estructura de paths bajo el mismo dominio, para eliminar CORS completamente y usar un solo certificado SSL:

- `clientes.imaquinaria.cl` → frontend (S3 + CloudFront)
- `clientes.imaquinaria.cl/api` → API Gateway (via CloudFront behavior)

El certificado SSL debe crearse en ACM región `us-east-1`, requisito de CloudFront independiente de la región de despliegue.

## Lambda

Runtime: `python3.13`. Memoria: `512 MB` — reduce latencia de cold start con dependencias FastAPI + boto3 + pydantic. Timeout: `30s`, suficiente para todos los endpoints incluyendo stats con múltiples queries DynamoDB.

La configuración de memoria quedó sujeta a revisión con métricas reales post-deploy. Las métricas de producción (p50 ~117 ms en Lambda, cold start rate 0,7%) confirmaron que 512 MB es correcto.

## Variables de entorno

Almacenadas en SSM Parameter Store como `String` (no `SecureString`). Las variables del backend (TABLE_NAME, Cognito IDs, URLs) son identificadores, no secretos sensibles — no otorgan acceso por sí solos.

**Decisión futura:** migrar a `SecureString` antes de incorporar el primer tenant externo. No requiere cambios en el código, solo en el template y en los valores de SSM.

## Logs

Retención en CloudWatch: 30 días. Suficiente para debugging operacional sin acumular deuda de almacenamiento.

## Consecuencias

CloudFront actúa como proxy tanto para el frontend como para la API, simplificando CORS y el manejo de certificados. La arquitectura soporta multi-tenant: agregar un segundo comercio es registrarlo en DynamoDB, sin cambios de infraestructura.
