# Portfolio V2 Project State

Updated: August 26, 2026

## Mission

Build a recruiter ready engineering portfolio that demonstrates product judgment, technical depth, originality, trustworthy execution, and the ability to turn messy real world problems into dependable software systems.

## Positioning

Primary positioning statement:

I turn messy real world problems into trustworthy software systems.

The portfolio should prove this statement through evidence rather than rely on claims alone.

## Current Phase

Phase 2: Architecture foundation, evidence system, and case study implementation.

Status: Active. Discovery is sufficiently stable for implementation, while project proof work continues in parallel.

Integration branch: `portfolio-v2`

Production branch: `main`

Current implementation stack:

1. Draft PR #9: `feature/astro-foundation` into `portfolio-v2`.
2. Draft PR #10: `feature/project-evidence-collection` into `feature/astro-foundation`.
3. Draft PR #11: `feature/case-study-routes` into `feature/project-evidence-collection`.

All three implementation heads have passed their current CI gates. Production `main` remains untouched.

## Completed

1. Researched current portfolio expectations, engineering hiring signals, interaction trends, accessibility expectations, performance expectations, and modern portfolio patterns.
2. Identified the central narrative around systems thinking, workflow automation, product engineering, applied AI, and trustworthy software behavior.
3. Created the isolated `portfolio-v2` workstream from the untouched production baseline.
4. Audited the current portfolio repository, homepage hierarchy, project data, proof gaps, and deployment path constraints.
5. Created the V2 operating documents, product requirements, design principles, quality gates, information architecture, content model, and architecture decision process.
6. Audited SmallBizzWizz, CMS Rescue, Craft Product Publisher, Prime Lab, and Phase directly against repository evidence.
7. Recorded a provisional evidence readiness ranking and revised the flagship hierarchy accordingly.
8. Accepted Astro with TypeScript for V2 in ADR 0001 after comparing it against Next.js and the actual portfolio requirements.
9. Defined the V2 route model for Home, Work, project case studies, Lab, About, Resume, Contact, and 404 behavior.
10. Defined a typed project evidence model with explicit public and private proof posture, provenance for measured outcomes, and validation rules for flagship content.
11. Initialized Astro 7.2.6 with strict TypeScript, static output, GitHub Pages aware base path handling, reduced motion support, unit testing, and continuous integration.
12. Corrected the initial TypeScript 7 toolchain choice after CI demonstrated that Astro language tooling does not yet support it. The compatible TypeScript 5.9.3 toolchain is green.
13. Implemented the `projects` content collection with Zod validation and initial verified entries for SmallBizzWizz, CMS Rescue, Craft Product Publisher, Prime Lab, and Phase.
14. Added validation for public repository requirements, private flagship publishable evidence, measured outcome provenance, gallery alternative text, and duplicate featured ranks.
15. Upgraded GitHub Actions checkout and Node setup steps to their current Node 24 runtime releases.
16. Built reusable collection driven project cards and generated static detail routes for Work and Lab entries.
17. Built shared case study components for problem context, constraints, technology, narrative, public evidence, outcomes, and proof links.
18. Ensured private evidence records remain available to the content model but are filtered out of public rendered pages.
19. Added an explicit 404 route.
20. Created eight trackable V2 lifecycle issues and three stacked implementation pull requests.

## Evidence Audit Findings

### SmallBizzWizz

Current evidence readiness: 34 of 40.

Strongest fully verifiable flagship today because the source is public, the application is deployed, the system is substantial, and repository history demonstrates ongoing production defect handling. Main proof weaknesses remain the default starter README, no automated application test suite found in the first pass, and outcome claims that need tighter measurement.

### CMS Rescue

Current evidence readiness: 32 of 40.

The private implementation verifies deterministic CMS repair, conservative human review routing, source preservation, Framer permission checks, recovery behavior, linting, type checking, builds, Marketplace packaging, and release validation. Main proof gaps remain private source, no automated test command found in the first pass, and no verified operational outcome yet.

### Craft Product Publisher

Current evidence readiness: 29 of 40.

The private repository verifies a Python and PySide6 desktop preparation pipeline with image quality inspection, protected previews, Shopify card generation, variant modeling, manifest output, automated tests, and explicit publication safety gates. The audited GitHub state currently proves the Version 0.1 preparation pipeline only and must not be used to claim later Shopify write behavior until the repository is brought current.

### Prime Lab

Current evidence readiness: 25 of 40.

Strong supporting evidence for computational experimentation and visualization, but some modules remain unfinished on `main` and business outcome relevance is intentionally limited.

### Phase

Current evidence readiness: 25 of 40.

Strong supporting evidence for originality and procedural browser engineering through mathematical graphics, geometry, prime driven mechanics, and live Web Audio with no media assets. It currently lacks automated tests and has concentrated architecture.

### Portfolio Platform

Not scored yet. V2 must earn flagship status through its architecture, typed evidence system, automated testing, continuous integration, accessibility, performance, SEO, deployment quality, and documented technical decisions.

## Revised Portfolio Hierarchy

1. SmallBizzWizz as the strongest fully verifiable flagship today.
2. CMS Rescue as the strongest differentiated flagship candidate.
3. Craft Product Publisher as the strongest business automation flagship candidate once the repository reflects current work.
4. Portfolio Platform as a future flagship that must earn its position during implementation.
5. Prime Lab and Phase as Lab proof of experimentation and originality.

This order remains provisional. CMS Rescue or Craft Product Publisher can overtake SmallBizzWizz when their proof gaps close.

## Current Architecture

Framework: Astro 7.2.6.

Language: TypeScript 5.9.3.

Rendering model: Static generation by default.

Content model: Astro content collection with Zod validation.

Client strategy: No React dependency by default. Add interactive islands only when an interaction has a clear explanatory or navigational job.

Testing: Vitest unit tests plus Astro and TypeScript checks in CI.

Hosting target: GitHub Pages unless a later ADR justifies a change.

Path strategy: Repository base paths are centralized through Astro configuration and framework supplied base URL handling. Hardcoded `/my-portfolio` component paths are prohibited.

## Active Work

1. Review and integrate the three green stacked implementation pull requests into `portfolio-v2` in dependency order.
2. Make dependency resolution reproducible with a committed lockfile and switch CI installation to `npm ci` before production release.
3. Build the SmallBizzWizz flagship case study from verified repository and production evidence.
4. Create a publishable CMS Rescue proof package that is technically credible without exposing unnecessary private source.
5. Bring Craft Product Publisher repository evidence up to the current workflow before expanding its claims.
6. Add approved screenshots, diagrams, and evidence artifacts to the typed content entries.
7. Begin the evidence led V2 visual system only after the flagship case study structure contains real content.

## Immediate Next Move

Use the verified SmallBizzWizz repository and existing evidence inventory to replace its short placeholder Markdown body with the first complete V2 flagship case study. This will test whether the current schema and route architecture can express real technical depth before the visual system is designed around it.

In parallel, close the dependency reproducibility gap by committing a lockfile and changing CI from `npm install` to `npm ci`.

## Working Rules

1. Evidence before aesthetics.
2. Claims must be traceable to code, documentation, screenshots, deployed behavior, or verifiable outcomes.
3. Production on `main` stays stable until V2 passes the quality gates.
4. Implementation work uses focused branches and reviewable pull requests.
5. Paths must work locally and on GitHub Pages or the selected production host without hardcoded repository prefixes.
6. Accessibility, performance, SEO, responsiveness, and reduced motion behavior are release requirements, not cleanup tasks.
7. Every major architectural decision gets an ADR.
8. Every work session updates this file when project state materially changes.
9. Private repositories may support case studies, but public pages must contain enough safe evidence for an external reviewer to understand why the engineering claims are credible.
10. Do not invent metrics, outcomes, users, revenue, deployment status, or technical behavior.

## Definition of V2 Success

The finished portfolio should make a technically literate reviewer understand within roughly one minute what kinds of problems Blake solves, why the work is credible, where the strongest engineering evidence lives, and how to inspect or contact him further. Deeper exploration should reward engineering managers with architecture, tradeoffs, testing, failure handling, system behavior, and measured outcomes rather than marketing copy alone.
