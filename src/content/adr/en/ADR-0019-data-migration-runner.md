---
slug: ADR-0019-data-migration-runner
locale: en
id: ADR-0019
shortTitle: "Data Migration Runner"
title: "Idempotent data migration runner on deploy"
date: 2026-06-01
status: Accepted
translation: ADR-0019-runner-migraciones-datos
---

## Context

Data migrations on DynamoDB lived as ad-hoc scripts executed manually after each deploy. The problem: they depended on human discipline to remember to run them, run them in order, and not accidentally re-run them.

**The incident that motivated this ADR:** a deploy introduced code that expected a renamed field in DynamoDB. The operator forgot to run the migration script. The bug silently reached production because the system had no way to detect the "new code + old data" state.

## Decision

Implement a Python runner integrated into the CI/CD pipeline with the following properties:

### Tracking in the single-table itself

Instead of creating a new table, the main DynamoDB table is reused with a dedicated namespace:

```
PK = "MIGRATIONS#GLOBAL"
SK = "MIG#{YYYYMMDD_HHMMSS}_{slug}"
```

This maintains the project's single-table convention and avoids an additional AWS resource. The `MIGRATIONS#GLOBAL` namespace is physically isolated from the tenant namespace — no domain query can accidentally touch it.

### Order by timestamp in filename

Naming convention: `YYYYMMDD_HHMMSS_{slug}.py`. The runner sorts lexicographically and applies in order. No explicit DAG required — data migrations rarely have non-trivial dependencies.

### Forward-only (no rollbacks)

DynamoDB does not guarantee cross-partition cross-item transactions. Implementing "down migrations" is expensive and rarely correct: you cannot undo a field that was already modified by production traffic.

If an applied migration leaves incorrect data, the fix is another forward migration. Each migration must be idempotent and resumable.

### Pipeline integration

```
1. sam build
2. sam deploy          # code + infra
3. migration runner    # data
4. smoke test          # validates consistency
```

If the runner fails, the pipeline fails and the smoke test does not run. The signal is clear: the data is not in the state the new code expects.

## Consequences

**Positive:** zero manual post-deploy steps. Historical visibility: querying `MIGRATIONS#GLOBAL` lists all applied migrations with timestamp and author. A hash of the script content retroactively detects if someone edited it after it was applied.

**Negative:** longer pipeline for heavy migrations. The "no ad-hoc UpdateItem in production" convention depends on human code review until a CI lint is added.

## Discarded alternatives

**Alembic-style tools for DynamoDB:** existing ones assume a relational model. Plain Python maintains consistency with the rest of the infrastructure.

**Explicit down migrations:** high maintenance cost, low real value in single-table NoSQL. Forward-only is the standard practice in DynamoDB.
