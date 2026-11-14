---
slug: ADR-0023-iam-roles-as-iac
locale: en
id: ADR-0023
shortTitle: "IAM Roles as IaC"
title: "GitHub Actions IAM roles managed as IaC"
date: 2026-06-24
status: Accepted
translation: ADR-0023-roles-iam-en-iac
---

## Context

The CI/CD pipeline IAM roles were created manually in the AWS console during the initial setup. This worked until a change to the SAM template added CloudFront resource access that the role did not have — and the error only surfaced at runtime during the deploy.

**The concrete symptom:** adding `AccessLogSettings` to API Gateway caused CloudFormation to attempt an update on the CloudFront distribution, an operation that required permissions not present in the role. The error was discovered in production with automatic rollback, requiring two corrective deploys.

**The underlying problem:** without IaC, IAM permissions are invisible — no diff, no review, no history. The first successful deploy gives false confidence that permissions are correct; gaps only appear when a new category of AWS resources is touched.

## Decision

IAM roles are codified in a separate CloudFormation stack and deployed via a dedicated workflow.

### Why a separate stack and not inside the main template

The app template is deployed *with* the IAM roles. If those roles were in the same stack, a misconfigured policy could break the very deploy that tries to fix it — a permissions dead-lock. A separate stack breaks that circular dependency.

### Why `cloudfront:*` and not granular permissions

CloudFront permissions were expanded to `cloudfront:*` after two failed attempts with granular lists. CloudFormation requires different actions depending on the operation type, and the complete list is not exhaustively documented.

**Risk analysis:** the policy already includes `s3:*` and `dynamodb:*` without resource restriction, which are considerably more dangerous. Restricting only CloudFront would be false security: the floor of potential damage is set by S3 and DynamoDB. A full scope review is deferred until the project onboards external collaborators with merge permissions.

### `DeletionPolicy: Retain`

All resources in the IAM stack carry `DeletionPolicy: Retain`. Accidentally deleting the stack would not delete the roles — which is critical because their absence would break all future deploys.

## Consequences

Any IAM permissions change goes through a Pull Request, is reviewable in the diff, and has a history in git. The IAM workflow has `cancel-in-progress: false` to prevent an app deploy from accidentally cancelling an in-progress role update.
