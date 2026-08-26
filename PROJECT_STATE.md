# Portfolio V2 Project State

Updated: August 26, 2026

## Mission

Build a recruiter ready engineering portfolio that demonstrates product judgment, technical depth, originality, trustworthy execution, and the ability to turn messy real world problems into dependable software systems.

## Positioning

Primary positioning statement:

I turn messy real world problems into trustworthy software systems.

The portfolio should prove this statement through evidence rather than rely on claims alone.

## Current Phase

Phase 2: Architecture foundation, evidence system, case study implementation, and engineering skill development.

Status: Active. Discovery is sufficiently stable for implementation. Repository proof and engineering education continue in parallel.

Integration branch: `portfolio-v2`

Production branch: `main`

Current implementation stack:

1. Draft PR 9: `feature/astro-foundation` into `portfolio-v2`.
2. Draft PR 10: `feature/project-evidence-collection` into `feature/astro-foundation`.
3. Draft PR 11: `feature/case-study-routes` into `feature/project-evidence-collection`.

Production `main` remains untouched.

## Architecture Status

Framework: Astro 7.2.6.

Language: TypeScript 5.9.3.

Rendering model: Static generation by default.

Content model: Astro content collection with Zod validation.

Client strategy: No React dependency by default. Interactive client code must have a clear explanatory or navigational purpose.

Testing: Vitest unit tests plus Astro and TypeScript checks in CI.

Dependency installation: Locked through committed `package-lock.json` and validated with `npm ci` in CI.

CI permissions: Read only repository contents.

Hosting target: GitHub Pages unless a later ADR justifies a change.

Path strategy: Repository base paths are centralized through Astro configuration and framework supplied base URL handling.

Latest branch quality gate: Green after deterministic dependency installation, Astro checks, unit tests, and production build.

## Completed Portfolio Work

1. Researched current portfolio expectations, hiring signals, interaction trends, accessibility, performance, modern frontend architecture, AI assisted engineering, security, and testing guidance.
2. Created the isolated V2 workstream and operating documents.
3. Audited the existing portfolio structure and proof gaps.
4. Accepted Astro with TypeScript through ADR 0001.
5. Defined Home, Work, case study, Lab, About, Resume, Contact, and 404 route behavior.
6. Implemented typed project evidence with validation for public source claims, private proof posture, measured outcome provenance, gallery accessibility, and flagship rank collisions.
7. Implemented reusable project cards and generated Work and Lab case study routes.
8. Filtered private evidence out of public rendered case study pages.
9. Added continuous integration and deterministic dependency installation.
10. Created `docs/EDUCATIONAL_FOUNDATION.md` as the engineering curriculum for the rebuild.
11. Created `docs/REPOSITORY_PORTFOLIO_MAP.md` to define which repositories deserve flagship, supporting, Lab, learning, or contribution status.
12. Completed a broader audit of the GitHub account rather than limiting discovery to the original shortlist.

## Current Evidence Hierarchy

### SmallBizzWizz

Role: Flagship and strongest public verification story.

Evidence strength:

1. Public source and live application.
2. Substantial Next.js and PostgreSQL system.
3. Authenticated APIs, billing, workbook ingestion, normalized data, deterministic insights, AI narratives, diagnostics, and explicit processing state.
4. Real production maintenance history.

Current proof gap:

No automated application test suite is exposed yet.

Action taken:

A documentation branch and draft pull request now replace the default framework README with the actual architecture and reliability model. A dedicated issue defines the deterministic financial pipeline test plan.

### CMS Rescue

Role: Flagship and strongest differentiated product engineering story.

Evidence strength:

1. Deterministic CMS repair.
2. Human review for ambiguity.
3. Source preservation.
4. Framer permissions and recovery behavior.
5. Product licensing and activation.
6. Marketplace packaging and launch preparation.
7. Security hardening history.

Current proof gap:

Private source, no automated test suite found, and no verified public usage outcome yet.

Action taken:

A dedicated repository issue now defines the invariant test architecture for matching, ambiguity, conflict, permissions, and partial write failures.

### Craft Product Publisher

Role: Flagship business automation story.

Evidence strength:

Python and PySide6 workflow, image processing, variant modeling, manifest persistence, automated foundation tests, and explicit publishing approval boundaries.

Current proof gap:

The audited GitHub state still proves only the foundation version and must be brought current before later Shopify workflow claims are published.

### BioBase

Role: Supporting open source collaboration evidence.

Verified evidence:

Upstream pull request 15 from `blake2731` was merged into `lignum-vitae/biobase` on November 3, 2025. It added Codon Adaptation Index calculation and tests covering DNA and RNA input, stop codons, missing reference coverage, partial codons, and invalid input behavior.

Portfolio rule:

Present this as a contribution to an external codebase, not ownership of BioBase.

### Crafty Brother Shopify Theme

Role: Supporting production commerce evidence.

Verified evidence:

Production Shopify Dawn customization includes variant aware pricing and shipping behavior for digital and physical products.

### Matthews Detail

Role: Supporting real business delivery.

Verified evidence:

Public repository and custom domain production site.

Current proof gap:

No README and unnecessarily large image assets.

### Prime Lab

Role: Lab.

Primary signal: mathematical experimentation, visualization, and hypothesis driven work.

### Phase

Role: Lab.

Primary signal: procedural browser graphics, geometry, prime driven mechanics, Canvas, and synthesized Web Audio.

### Release Guard Spike

Role: Lab and possible future product.

Current evidence:

Read only Framer capability probe for branch state, unpublished changes, deployments, and deployment issues.

Do not promote it to flagship until a complete release readiness problem and useful user outcome exist.

## GitHub Presentation Work Completed

1. SmallBizzWizz draft PR 1 rewrites the public README around verified architecture and known limitations without changing production application code.
2. GitHub profile draft PR 1 replaces older tutorial style primary projects with current engineering evidence.
3. The profile draft now includes the verified merged BioBase contribution.
4. Recommended public pins are documented in `docs/REPOSITORY_PORTFOLIO_MAP.md`.

## Educational Calibration

The rebuild is intentionally teaching and demonstrating ten transferable foundations:

1. Contracts and correctness.
2. Data modeling.
3. Testing as evidence.
4. Failure engineering and resilience.
5. Security engineering.
6. Observability and operability.
7. Web accessibility and performance.
8. Reproducible delivery.
9. AI engineering with deterministic boundaries and evaluation.
10. Technical communication.

The detailed learning sequence and project mapping are in `docs/EDUCATIONAL_FOUNDATION.md`.

## Active Work

1. Build the complete SmallBizzWizz V2 case study from the verified architecture.
2. Implement the deterministic SmallBizzWizz test suite defined in repository issue 2.
3. Implement CMS Rescue invariant tests defined in repository issue 1.
4. Build the publishable CMS Rescue proof package.
5. Bring Craft Product Publisher GitHub state up to its current implementation before expanding claims.
6. Add approved screenshots and diagrams to flagship content.
7. Add Playwright browser coverage to Portfolio V2.
8. Add automated accessibility checks and manual keyboard validation.
9. Establish performance budgets and measure Core Web Vitals.
10. Perform an OWASP ASVS informed review of SmallBizzWizz trust boundaries.
11. Begin the evidence led visual system only after real flagship content exercises the route architecture.

## Immediate Next Move

Write the first complete SmallBizzWizz case study inside the typed V2 content system using the verified repository evidence already collected.

The case study must make the deterministic financial pipeline, AI boundary, failure states, database model, production maintenance, and current test gap understandable to an engineering manager.

After that content exercises the current architecture, start the SmallBizzWizz deterministic test suite before heavy visual design work.

## Working Rules

1. Evidence before aesthetics.
2. Claims must be traceable to code, documentation, screenshots, deployed behavior, merged contribution history, or verifiable outcomes.
3. Production on `main` stays stable until V2 passes the quality gates.
4. Implementation work uses focused branches and reviewable pull requests.
5. Paths must work locally and on the selected production host without hardcoded repository prefixes.
6. Accessibility, performance, security, responsiveness, testing, and reduced motion behavior are release requirements.
7. Every major architectural decision gets an ADR.
8. Every work session updates this file when project state materially changes.
9. Private repositories may support case studies, but public pages must provide enough safe evidence for an external reviewer to understand the engineering claim.
10. Do not invent metrics, outcomes, users, revenue, deployment status, or technical behavior.
11. A learning topic is not complete until the principle can be explained, demonstrated in code, tested or measured, and defended as a tradeoff.

## Definition of V2 Success

The finished portfolio should make a technically literate reviewer understand within roughly one minute what kinds of problems Blake solves, why the work is credible, where the strongest engineering evidence lives, and how to inspect or contact him further.

Deeper exploration should reward engineering managers with architecture, tradeoffs, tests, failure handling, security boundaries, system behavior, production learning, and measured quality rather than marketing copy alone.
