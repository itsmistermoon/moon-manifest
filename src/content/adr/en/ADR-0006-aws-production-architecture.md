---
slug: ADR-0006-aws-production-architecture
locale: en
id: ADR-0006
shortTitle: "AWS Production Architecture"
title: "AWS Production Architecture"
date: 2026-04-26
status: Accepted
translation: ADR-0006-arquitectura-aws-produccion
---

## Domain and URLs

Production domain: `clientes.imaquinaria.cl`

Path structure under the same domain, to eliminate CORS entirely and use a single SSL certificate:

- `clientes.imaquinaria.cl` → frontend (S3 + CloudFront)
- `clientes.imaquinaria.cl/api` → API Gateway (via CloudFront behavior)

The SSL certificate must be created in ACM region `us-east-1`, a CloudFront requirement independent of the deployment region.

## Lambda

Runtime: `python3.13`. Memory: `512 MB` — reduces cold start latency with FastAPI + boto3 + pydantic dependencies. Timeout: `30s`, sufficient for all endpoints including stats with multiple DynamoDB queries.

The memory configuration was subject to review with real post-deploy metrics. Production metrics (p50 ~117 ms on Lambda, cold start rate 0.7%) confirmed that 512 MB is correct.

## Environment Variables

Stored in SSM Parameter Store as `String` (not `SecureString`). Backend variables (TABLE_NAME, Cognito IDs, URLs) are identifiers, not sensitive secrets — they do not grant access on their own.

**Future decision:** migrate to `SecureString` before onboarding the first external tenant. Requires no code changes, only template and SSM value updates.

## Logs

CloudWatch retention: 30 days. Sufficient for operational debugging without accumulating storage debt.

## Consequences

CloudFront acts as a proxy for both the frontend and the API, simplifying CORS and certificate management. The architecture supports multi-tenant: adding a second merchant is registering it in DynamoDB, with no infrastructure changes.
