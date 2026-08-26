# Repository Operating Instructions

This repository is being rebuilt as a professional portfolio product rather than treated as a one time visual refresh.

## Start Here

Before making changes, read in this order:

1. `PROJECT_STATE.md`
2. `docs/VISION.md`
3. `docs/REQUIREMENTS.md`
4. `docs/EVIDENCE_AUDIT.md`
5. `docs/DESIGN_PRINCIPLES.md`
6. `docs/QUALITY_GATES.md`
7. Relevant ADR files under `docs/adr/`

## Source of Truth

`PROJECT_STATE.md` is the operational source of truth for the current phase, completed work, active work, immediate next move, and important constraints.

Update it whenever a work session materially changes project state.

## Product Principle

The portfolio must demonstrate engineering judgment through verifiable evidence. Prefer working systems, architecture, tests, performance data, decision records, screenshots, repository history, and measurable outcomes over unsupported adjectives.

## Branching

`main` is production.

`portfolio-v2` is the V2 integration branch.

Once architecture work begins, use focused branches derived from `portfolio-v2` for implementation units.

## Content Integrity

Do not invent metrics, clients, production usage, revenue impact, users, deployment status, security findings, or technical capabilities.

Mark uncertain claims as requiring evidence and resolve them through repository inspection before publishing.

## Path Constraint

All internal paths and assets must work locally and on the selected static hosting path without hardcoded repository prefixes.

## Release Discipline

Do not merge V2 to production until the quality gates in `docs/QUALITY_GATES.md` are satisfied or an explicit exception is documented.
