---
slug: ADR-0019-runner-migraciones-datos
locale: es
id: ADR-0019
shortTitle: "Runner de migraciones de datos"
title: "Runner idempotente de migraciones de datos en deploy"
date: 2026-06-01
status: Aceptado
translation: ADR-0019-data-migration-runner
---

## Contexto

Las migraciones de datos sobre DynamoDB vivían como scripts ad-hoc ejecutados manualmente post-deploy. El problema: dependían de disciplina humana para recordar correrlos, correrlos en orden, y no re-correrlos accidentalmente.

**El incidente que motivó este ADR:** un deploy introdujo código que esperaba un campo renombrado en DynamoDB. El operador olvidó correr el script de migración. El bug llegó silenciosamente a producción porque el sistema no tenía forma de detectar el estado "código nuevo + datos viejos".

## Decisión

Implementar un runner Python integrado en el pipeline CI/CD con las siguientes propiedades:

### Tracking en la propia single-table

En lugar de crear una tabla nueva, se reutiliza la tabla principal de DynamoDB con un namespace dedicado:

```
PK = "MIGRATIONS#GLOBAL"
SK = "MIG#{YYYYMMDD_HHMMSS}_{slug}"
```

Esto mantiene la convención single-table del proyecto y evita un recurso AWS adicional. El namespace `MIGRATIONS#GLOBAL` es físicamente aislado del namespace de tenants — ninguna query de dominio puede tocarlo accidentalmente.

### Orden por timestamp en filename

Convención de nombre: `YYYYMMDD_HHMMSS_{slug}.py`. El runner ordena lexicográficamente y aplica en orden. No requiere DAG explícito — las migraciones de datos raramente tienen dependencias no triviales.

### Forward-only (sin rollbacks)

DynamoDB no garantiza transacciones cross-partition cross-item. Implementar "down migrations" es caro y rara vez correcto: no se puede deshacer un campo que ya fue modificado por tráfico de producción.

Si una migración aplicada deja datos incorrectos, la corrección es otra migración forward. Cada migración debe ser idempotente y resumible.

### Integración en el pipeline

```
1. sam build
2. sam deploy          # código + infra
3. runner migraciones  # datos
4. smoke test          # valida coherencia
```

Si el runner falla, el pipeline falla y el smoke no corre. La señal es clara: los datos no están en el estado que el código nuevo espera.

## Consecuencias

**Positivas:** cero pasos manuales post-deploy. Visibilidad histórica: consultar `MIGRATIONS#GLOBAL` lista todas las migraciones aplicadas con timestamp y autor. Un hash del contenido del script detecta retroactivamente si alguien lo editó después de aplicarlo.

**Negativas:** pipeline más largo para migraciones pesadas. La convención "no UpdateItem ad-hoc en producción" depende de code review humano hasta que se agregue un lint en CI.

## Alternativas descartadas

**Herramientas Alembic-style para DynamoDB:** las existentes asumen modelo relacional. Python puro mantiene coherencia con el resto de la infraestructura.

**Down migrations explícitas:** costo de mantenimiento alto, valor real bajo en NoSQL single-table. Forward-only es la práctica estándar en DynamoDB.
