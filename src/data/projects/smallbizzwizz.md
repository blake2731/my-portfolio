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
  - type: commit
    label: Production maintenance history
    visibility: public
    source: https://github.com/blake2731/smallbizzwizz/commits/main
    claim: Repository history documents spreadsheet upload fixes, iPhone onboarding repair, MIME validation, prompt caching, health diagnostics, and other production maintenance work.
  - type: deployment
    label: Live application
    visibility: public
    source: https://smallbizzwizz.com
    claim: The application is deployed publicly.
outcomes:
  - statement: The system separates deterministic workbook processing and insight generation from the AI narrative layer.
    kind: observed
  - statement: Recent repository history demonstrates continued production defect repair and maintenance rather than a one time prototype handoff.
    kind: observed
---

The V2 case study will focus on the data pipeline, explicit failure states, architecture decisions, and the boundary between deterministic business logic and AI generated narrative output.
