---
title: SmallBizzWizz
slug: smallbizzwizz
summary: A full stack business data system that turns operational workbooks into validated records, deterministic insights, and AI assisted management narratives.
projectType: SaaS application
status: production
visibility: public-source
tier: flagship
featuredRank: 1
themes:
  - systems
  - data
  - applied AI
  - reliability
role: Independent full stack engineer and product owner
timeframe: 2025 to 2026
problem: Operational and financial workbooks contain useful business signals, but raw spreadsheets are difficult to normalize, validate, persist, and explain consistently without introducing silent errors.
constraints:
  - Numerical truth must come from deterministic processing rather than AI invention.
  - Unsupported or malformed workbook states must fail visibly.
  - Uploaded business data requires careful validation and handling.
  - The workflow must preserve enough processing state to diagnose partial and failed runs.
stack:
  - Next.js
  - React
  - TypeScript
  - PostgreSQL
  - Drizzle ORM
  - Clerk
  - ExcelJS
  - Stripe
  - Anthropic API
links:
  repository: https://github.com/blake2731/smallbizzwizz
  live: https://smallbizzwizz.com
evidence:
  - type: source
    label: Public application source
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz
    claim: The public repository contains the application routes, workbook workflow, persistence layer, authentication, billing integration, and AI integration.
  - type: architecture
    label: Deterministic workbook parser
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz/blob/main/lib/parsers/cypress.ts
    claim: The parser reads Excel workbook hierarchy, identifies supported Actual versus Budget sheets, preserves row context, and validates closing totals against accumulated child records.
  - type: architecture
    label: Staged financial processing pipeline
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz/blob/main/lib/verticals/nursing-home/pipeline.ts
    claim: The workflow explicitly moves through parsing, validation, normalization, deterministic insights, AI narratives, persistence, completion, and failure states.
  - type: architecture
    label: Persistent data model
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz/blob/main/lib/db/schema.ts
    claim: PostgreSQL separates facilities, uploads, reporting periods, normalized records, deterministic insight packets, and generated narratives with indexes, uniqueness constraints, and referential relationships.
  - type: source
    label: Authenticated workbook intake
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz/blob/main/app/api/uploads/route.ts
    claim: Workbook intake authenticates the user, validates supported input, assigns reporting context, computes a SHA 256 checksum, creates processing state, and then invokes the deterministic pipeline.
  - type: commit
    label: Production maintenance history
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz/commits/main
    claim: Repository history documents spreadsheet upload fixes, iPhone onboarding repair, MIME validation, prompt caching, sensitive file hardening, bot filtering, health diagnostics, and deployment related fixes.
  - type: deployment
    label: Live application
    visibility: public
    source: https://smallbizzwizz.com
    claim: The application is deployed publicly.
outcomes:
  - statement: The system separates deterministic workbook parsing, validation, normalization, and insight generation from the AI narrative layer.
    kind: observed
  - statement: Upload records preserve named processing stages, explicit failure categories, validation statistics, diagnostics, and integrity information instead of reducing processing to a single success flag.
    kind: observed
  - statement: Repository history demonstrates continued production defect repair and operational hardening rather than a one time prototype handoff.
    kind: observed
---

## The system thesis

SmallBizzWizz began as a business advisor, but the more interesting engineering problem emerged when the product needed to reason over operational spreadsheets without allowing a language model to invent the underlying facts.

That changes the architecture question completely.

The system cannot simply upload a workbook and ask a model what it means. Financial values, hierarchy, totals, reporting periods, categories, and threshold based insights need a deterministic representation first. Only after that representation exists does generative AI become useful for communicating the result to different audiences.

The core design principle is therefore:

**deterministic facts first, generated explanation second.**

## Architecture and data flow

The skilled nursing workflow is a staged processing system rather than a single model call.

1. The upload route authenticates the current user through Clerk.
2. It validates that a workbook exists and that the input is compatible with the structured parser.
3. It requires a reporting period before processing begins.
4. It selects or creates a facility inside the authenticated user scope.
5. It reads the workbook into memory and computes a SHA 256 checksum.
6. It creates an upload record and reporting period before expensive processing starts.
7. The parser converts supported Excel sheets into structured financial records and validation issues.
8. Domain mapping normalizes those records into a stable financial model.
9. Deterministic rules create operational insight packets from the normalized data.
10. Structured source data is assembled for narrative generation.
11. Audience specific narratives are generated only after the deterministic layers have produced their evidence.
12. Normalized records, insights, narratives, processing state, diagnostics, and errors are persisted for later inspection.

This ordering makes the AI layer downstream of the facts rather than responsible for discovering the facts.

## Turning spreadsheet formatting into explicit structure

The source workbook format carries meaning in more than cell values. Excel outline levels encode hierarchy, repeated labels can represent opening sections and closing totals, hidden rows can still matter to source integrity, and formatted total rows need to reconcile with the detail beneath them.

`lib/parsers/cypress.ts` turns those conventions into explicit records.

For supported Actual versus Budget sheets, the parser tracks open hierarchy levels as it walks each row. A label without values opens a section. A later row at the same outline level with the same label and values can close that section as a total. Detail rows contribute to the immediate parent accumulator.

The immediate parent rule matters. Walking upward past a missing parent would double count drill down structures against a grandparent total, so the implementation deliberately refuses to do that.

When a closing total appears, the parser compares its Actual and Budget values with the accumulated child values. Differences greater than the configured tolerance become validation issues rather than being silently accepted.

Unsupported sheet layouts are also explicit results. The parser returns an unsupported format with notes instead of pretending that a workbook it does not understand was successfully processed.

That is an important tradeoff: the parser is intentionally specialized. A narrower parser that can explain exactly what it understands is safer than a general parser that quietly guesses.

## Normalization before analysis

Parsed spreadsheet rows are still source shaped data. They contain workbook concepts such as sheet names, outline levels, sections, line items, row numbers, Actual values, Budget values, and variances.

The next layer maps those records into domain concepts used by the application.

This creates a stable boundary between how the source workbook happens to be formatted and how the product reasons about financial information.

That boundary is what makes later insight rules testable. A deterministic insight function should consume normalized business data, not reinterpret Excel presentation details every time it runs.

## The database is operational memory, not just storage

The PostgreSQL schema mirrors the stages of the workflow instead of collapsing everything into one JSON payload.

The model separates:

1. facilities owned by users,
2. workbook uploads,
3. reporting periods,
4. normalized financial records,
5. deterministic insight packets,
6. generated narratives,
7. conversations and messages,
8. user profile and onboarding context.

The distinction between an insight packet and a narrative is especially important.

An insight packet stores structured evidence such as severity, category, trend direction, supporting metrics, thresholds, periods, and explanation. A narrative stores the generated communication layer, including audience, model, prompt context, prompt text, output, errors, and supporting insight identifiers.

This means the generated prose does not have to become the canonical financial record.

Database constraints also carry part of the correctness model. Facilities are unique within a user scope, normalized source rows are unique within an upload and sheet position, insight keys are unique within an upload, and narrative audiences are unique within an upload.

Those are business invariants expressed where the data lives rather than relying only on UI behavior.

## Failure is modeled as data

A long processing pipeline needs to answer more than whether it succeeded.

The upload model currently distinguishes statuses including processing, completed, partial, failed validation, failed normalization, and failed processing.

It also records the current processing stage. Stages include uploaded, parsing, validating, normalizing, insights, narratives, persisting, complete, and failed.

The pipeline persists validation statistics, integrity information, diagnostics, processing errors, start time, completion time, and stage changes.

This gives the system enough memory to explain where processing stopped and why.

That design is more useful operationally than throwing one exception at the HTTP boundary and losing the context of everything that happened before it.

## AI is a communication layer, not a calculator

The repository uses Anthropic for conversational and narrative behavior, but the structured workflow deliberately does not delegate workbook truth to the model.

The model receives source data that has already passed through deterministic parsing, validation, normalization, and insight generation.

This creates a clearer trust boundary:

1. code decides what the workbook contains,
2. code checks the relationships and totals it knows how to validate,
3. code computes structured business insights,
4. the model helps explain those insights in useful language.

The distinction also makes failure behavior easier to reason about. A model provider failure should affect the narrative stage. It should not retroactively make a parsed financial value unknown.

## Production maintenance changed the design

The repository history matters because it shows what happened after the first version worked.

Recent maintenance includes:

1. repairing spreadsheet upload behavior,
2. validating attachment MIME types before provider upload,
3. fixing an onboarding flow that trapped iPhone users because the next action was not reachable,
4. adding prompt caching to reduce repeated model context cost,
5. hardening ignored file patterns for sensitive business data,
6. filtering bot scanning traffic,
7. adding protected database health diagnostics,
8. changing database initialization behavior so missing environment configuration did not break unrelated build time page collection.

These are not glamorous features, but they are strong engineering evidence. They show that the product has encountered browser behavior, provider boundaries, deployment behavior, security concerns, cost concerns, and operational debugging problems that do not appear in a tutorial happy path.

## A protected diagnostic path

One production hardening change added a token protected health diagnostic endpoint.

The endpoint is disabled unless a health token exists and rejected requests receive a not found response. Its purpose is to expose enough information to diagnose database connectivity and schema state without turning production diagnostics into a public information endpoint.

This is a useful example of the broader engineering philosophy in the project: observability is valuable, but diagnostic capability creates its own trust boundary and needs to be designed accordingly.

## Important tradeoffs

### Specialization versus generality

The structured workbook parser supports a known financial layout rather than claiming arbitrary spreadsheet understanding.

That limits the range of inputs, but it also makes validation rules explainable and deterministic.

### Persistence versus simplicity

Keeping uploads, reporting periods, normalized records, insights, and narratives as separate persistent entities creates more schema and migration work than storing one generated result.

The benefit is inspectability. The system can reason about source data, deterministic conclusions, and generated communication separately.

### Generative flexibility versus factual control

A model is excellent at explaining context in natural language. It is not the right place to hide unverified financial arithmetic.

The architecture accepts less generative freedom in exchange for a much clearer correctness boundary.

## Current limitation: the strongest logic is not tested enough yet

The largest engineering weakness is also straightforward to identify.

The repository does not currently expose an automated application test suite through `package.json`.

That means some of the strongest claims in the system, especially workbook hierarchy behavior, total reconciliation, normalization, threshold logic, and pipeline state behavior, are still supported primarily by source inspection and production history rather than executable regression evidence.

This is now a tracked engineering task rather than an undocumented weakness.

The first test layer should focus on the deterministic financial core because it provides the highest correctness value without requiring authentication, a browser, a database, or a language model.

Useful fixtures include:

1. a valid supported workbook,
2. an unsupported layout,
3. nested sections and totals,
4. a total mismatch just inside the tolerance,
5. a mismatch beyond the tolerance,
6. formulas with cached numeric results,
7. hidden rows,
8. a structure that would double count if parent accumulation were implemented incorrectly,
9. previous spreadsheet inputs that reproduced production defects, sanitized of business data.

After that layer is reliable, integration tests can exercise persistence boundaries and browser tests can cover user visible upload behavior.

## What I would improve next

1. Add deterministic parser, normalization, insight, and pipeline regression tests.
2. Use the existing workbook checksum to evaluate explicit duplicate and retry behavior where product requirements justify it.
3. Add browser coverage for the authenticated upload path and major mobile interactions.
4. Perform a focused security review of authenticated object access, uploads, webhooks, diagnostic routes, provider inputs, and secret handling using OWASP ASVS as a verification guide.
5. Define operational measurements for processing failures and upload quality so reliability can be measured rather than described only from code.

## Why this project belongs in the portfolio

SmallBizzWizz is not interesting because it connects an application to an AI API.

Its strongest evidence is the architecture around that API.

The system takes a messy source format, creates explicit structure, checks what can be checked deterministically, models processing failures, stores facts separately from generated prose, and continues to change in response to real production problems.

That is the engineering story the portfolio should prove.
