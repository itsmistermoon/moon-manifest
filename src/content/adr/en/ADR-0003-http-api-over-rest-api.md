---
slug: ADR-0003-http-api-over-rest-api
locale: en
id: ADR-0003
shortTitle: "HTTP API over REST API"
title: "HTTP API over REST API for API Gateway"
date: 2026-04-20
status: Accepted
translation: ADR-0003-http-api-sobre-rest-api
---

## Decision

Use **API Gateway HTTP API** (payload format 2.0) instead of REST API (payload 1.0).

## Reasoning

HTTP API is sufficient for all access patterns in the system: JWT authentication via Cognito authorizer, CORS, routing, and basic throttling.

The REST API-exclusive features (API keys, usage plans, response caching, WAF integration at the stage level) are not needed in the MVP and can be incorporated if traffic volume justifies it.

**Cost:** HTTP API costs ~$1/million requests vs ~$3.5/million for REST API. For initial traffic, the difference is negligible, but the principle of least complexity applies regardless.

## Consequences

If WAF at the API level or API Gateway response caching is required in the future, migrating from HTTP API to REST API requires a change in the SAM template and a redeploy — it is not transparent. This is documented as deliberate debt, not accidental.
