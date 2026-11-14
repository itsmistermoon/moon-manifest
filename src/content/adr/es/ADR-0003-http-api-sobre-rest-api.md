---
slug: ADR-0003-http-api-sobre-rest-api
locale: es
id: ADR-0003
shortTitle: "HTTP API sobre REST API"
title: "HTTP API sobre REST API para API Gateway"
date: 2026-04-20
status: Aceptado
translation: ADR-0003-http-api-over-rest-api
---

## Decisión

Usar **API Gateway HTTP API** (payload format 2.0) en lugar de REST API (payload 1.0).

## Razonamiento

HTTP API es suficiente para todos los access patterns del sistema: autenticación JWT vía Cognito authorizer, CORS, rutas y throttling básico.

Las features exclusivas de REST API (API keys, usage plans, caching de respuestas, integración con WAF a nivel de stage) no son necesarias en el MVP y pueden incorporarse si el volumen lo justifica.

**Costo:** HTTP API cuesta ~$1/millón de requests vs ~$3,5/millón de REST API. Para el tráfico inicial, la diferencia es de centavos, pero el principio de menor complejidad aplica igual.

## Consecuencias

Si en el futuro se requiere WAF a nivel de API o caching de respuestas de API Gateway, migrar de HTTP API a REST API requiere un cambio en el template SAM y un redeploy — no es transparente. Se documenta como deuda deliberada, no accidental.
