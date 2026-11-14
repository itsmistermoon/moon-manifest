---
slug: ADR-0023-roles-iam-en-iac
locale: es
id: ADR-0023
shortTitle: "Roles IAM como IaC"
title: "Roles IAM de GitHub Actions gestionados como IaC"
date: 2026-06-24
status: Aceptado
translation: ADR-0023-iam-roles-as-iac
---

## Contexto

Los roles IAM del pipeline CI/CD fueron creados manualmente en la consola AWS durante el setup inicial. Esto funcionó hasta que un cambio al template SAM añadió acceso a recursos CloudFront que el rol no tenía — y el error solo apareció en runtime durante el deploy.

**El síntoma concreto:** añadir `AccessLogSettings` al API Gateway hizo que CloudFormation intentara actualizar la distribución CloudFront, operación que requería permisos que no estaban en el rol. El error se descubrió en producción con rollback automático, requiriendo dos deploys de corrección.

**El problema de fondo:** sin IaC, los permisos IAM son invisibles — no hay diff, no hay review, no hay historia. El primer deploy exitoso da falsa confianza de que los permisos son correctos; los gaps aparecen solo cuando se toca una nueva categoría de recursos AWS.

## Decisión

Los roles IAM se codifican en un stack CloudFormation independiente y se despliegan via un workflow dedicado.

### Por qué un stack separado y no dentro del template principal

El template de la app se despliega *con* los roles IAM. Si esos roles estuvieran en el mismo stack, una política mal configurada podría romper el deploy que intenta corregirla — dead-lock de permisos. Un stack separado rompe esa dependencia circular.

### Por qué `cloudfront:*` y no permisos granulares

Los permisos CloudFront se expandieron a `cloudfront:*` después de dos intentos fallidos con listas granulares. CloudFormation necesita distintas acciones según el tipo de operación y la lista completa no está documentada exhaustivamente.

**Análisis de riesgo:** la política ya incluye `s3:*` y `dynamodb:*` sin restricción de recurso, que son considerablemente más peligrosos. Restringir solo CloudFront sería falsa seguridad: el piso de daño potencial lo fijan S3 y DynamoDB. La revisión de scope completo queda para cuando el proyecto incorpore colaboradores externos con permisos de merge.

### `DeletionPolicy: Retain`

Todos los recursos del stack IAM tienen `DeletionPolicy: Retain`. Eliminar el stack accidentalmente no eliminaría los roles — lo cual es crítico porque su ausencia rompería todos los deploys futuros.

## Consecuencias

Cualquier cambio de permisos IAM pasa por Pull Request, es revisable en el diff, y tiene historial en git. El workflow de IAM tiene `cancel-in-progress: false` para evitar que un deploy de app cancele accidentalmente una actualización de roles en curso.
