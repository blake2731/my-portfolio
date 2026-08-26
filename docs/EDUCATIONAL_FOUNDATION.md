# Portfolio V2 Educational Foundation

Updated: August 26, 2026

## Purpose

Portfolio V2 is also a structured engineering curriculum.

The goal is not to collect technologies. The goal is to learn principles that transfer between languages, frameworks, products, and employers, then prove those principles in working repositories.

Every learning objective in this document should eventually produce one or more of the following:

1. A tested implementation.
2. A documented architecture decision.
3. A measurable quality result.
4. A failure mode that is deliberately handled.
5. A case study artifact that explains why the engineering choice exists.

## Current Industry Calibration

Current engineering research points to a useful distinction.

AI assisted development is becoming normal. Verification is becoming more important, not less important.

GitHub research on the changing developer role emphasizes understanding, directing, and verifying generated work. Stack Overflow survey results show broad AI use while developer trust in AI accuracy remains limited.

That means the portfolio should not compete on the claim that AI was used. It should compete on evidence that AI accelerated work without weakening correctness.

Current source material for this curriculum includes:

1. GitHub developer research on AI assisted engineering and verification.
2. GitHub guidance for presenting projects and profile repositories to hiring managers.
3. Stack Overflow Developer Survey research on AI use, trust, and learning behavior.
4. OWASP Top 10 2025 and OWASP ASVS guidance for application security.
5. W3C WCAG 2.2 for accessibility.
6. web.dev Core Web Vitals guidance for performance.
7. Playwright guidance for user visible browser testing and CI.
8. Official framework and language documentation for the technology being implemented.

## Foundation 1: Contracts and Correctness

### Learn

1. Type systems as executable constraints.
2. Runtime validation where static types cannot protect external input.
3. Database constraints and invariants.
4. Input normalization.
5. Pure functions for important deterministic calculations.
6. Idempotency where operations may be retried.
7. Explicit state machines rather than ambiguous boolean flags.

### Demonstrate

Portfolio V2 already uses a typed Astro content schema to reject invalid project evidence.

SmallBizzWizz should add automated tests around workbook parsing, total validation, normalization rules, insight generation, and processing state transitions.

CMS Rescue should extract deterministic matching rules from UI code and test unique, unmatched, ambiguous, conflicting, and broken reference cases.

Craft Product Publisher should continue testing image processing, variant definitions, manifests, and future publishing safety rules.

## Foundation 2: Data Modeling

### Learn

1. Relational modeling.
2. Primary and foreign keys.
3. Uniqueness and indexing.
4. Transaction boundaries.
5. Referential integrity.
6. Migration discipline.
7. Modeling historical state instead of overwriting useful evidence.

### Demonstrate

SmallBizzWizz is the strongest current teaching project for this foundation. Its schema already separates facilities, uploads, reporting periods, normalized records, insight packets, and generated narratives.

The case study should explain why these are separate entities and which invariants the database protects.

## Foundation 3: Testing as Evidence

### Learn

Use different test levels for different failure costs.

1. Unit tests for deterministic rules and edge cases.
2. Integration tests for database and API boundaries.
3. Browser tests for critical user visible workflows.
4. Regression tests for bugs that already escaped once.
5. Fixtures that make real input structures reproducible.

Playwright guidance recommends testing behavior visible to users rather than internal implementation details and keeping tests isolated. Critical browser tests should run in CI.

### Demonstrate

Portfolio V2 should add Playwright coverage for navigation, generated case study routes, keyboard access, and critical responsive behavior.

SmallBizzWizz should begin with deterministic parser and pipeline tests before browser automation because the financial correctness layer has the highest information value.

CMS Rescue should convert the current manual release checklist into automated deterministic rule tests wherever the Framer API can be isolated behind adapters.

## Foundation 4: Failure Engineering and Resilience

### Learn

1. Enumerate failure states before coding the success path.
2. Preserve enough context to diagnose failures.
3. Separate retryable failures from permanent failures.
4. Design partial completion deliberately.
5. Avoid silent fallback when correctness is uncertain.
6. Design recovery instructions for destructive or stateful operations.
7. Treat exceptional conditions as part of normal system design.

OWASP Top 10 2025 explicitly includes mishandling of exceptional conditions, and its adjacent resilience guidance highlights application resilience as a significant concern.

### Demonstrate

SmallBizzWizz already models processing, partial completion, validation failure, normalization failure, processing failure, diagnostics, and integrity scores.

CMS Rescue already demonstrates conservative writes, permission checks, and partial failure recovery.

Release Guard is a useful Lab project for learning deployment state, preflight checks, and release confidence.

## Foundation 5: Security Engineering

### Learn

Use OWASP Top 10 2025 for awareness and OWASP ASVS as the deeper verification framework.

Priority areas for these repositories are:

1. Broken access control.
2. Security misconfiguration.
3. Software supply chain failures.
4. Injection and unsafe external input.
5. Insecure design.
6. Authentication failures.
7. Software and data integrity failures.
8. Security logging and alerting.
9. Exceptional condition handling.

### Demonstrate

Portfolio V2 should document its dependency and deployment model and keep the client attack surface intentionally small.

SmallBizzWizz should review authenticated object access, upload validation, webhook trust boundaries, secret handling, diagnostic endpoints, third party API inputs, and database authorization assumptions.

CMS Rescue should document permission checks and safe mutation boundaries.

Craft Product Publisher should preserve its explicit approval boundary before final publishing actions.

## Foundation 6: Observability and Operability

### Learn

1. Health checks.
2. Structured diagnostics.
3. Actionable logging.
4. Correlation identifiers for multi stage workflows.
5. Metrics that describe system health.
6. Deployment and release state.
7. Useful error messages without leaking secrets.

### Demonstrate

SmallBizzWizz already has a protected health diagnostic route and persisted upload diagnostics. The next step is to make operational signals coherent enough to explain how a failed upload would be investigated.

Release Guard can become a focused study of release readiness and deployment state if it progresses beyond the current read only capability probe.

## Foundation 7: Web Platform Quality

### Accessibility

Target WCAG 2.2 AA for portfolio owned interfaces.

Important implementation topics include semantic HTML, keyboard operability, visible focus, sufficient contrast, meaningful alternative text, touch target sizing, reduced motion, and avoiding hover only information.

### Performance

Use Core Web Vitals as user experience measurements.

Initial good experience thresholds are:

1. Largest Contentful Paint at or below 2.5 seconds.
2. Interaction to Next Paint at or below 200 milliseconds.
3. Cumulative Layout Shift at or below 0.1.

Measure representative pages rather than relying only on development intuition.

### Browser behavior

Critical portfolio paths should be exercised in current Chromium, Firefox, and WebKit based browser environments before release.

## Foundation 8: Reproducible Delivery

### Learn

1. Lock dependencies.
2. Use deterministic CI installation.
3. Build from a clean checkout.
4. Treat dependency updates as reviewable changes.
5. Separate production and integration branches.
6. Keep release gates explicit.
7. Make deployment configuration part of source control.

Current GitHub research highlights dependency and supply chain hygiene as increasingly important engineering work.

### Demonstrate

Portfolio V2 currently has a known gap because its Astro implementation branch does not yet contain a committed package lock. This must be fixed before integration is considered complete, and CI should use `npm ci` after the lockfile exists.

## Foundation 9: AI Engineering

### Learn

1. Define what the model is allowed to decide.
2. Keep deterministic facts outside generative reasoning when practical.
3. Validate structured model output.
4. Build evaluation cases for important prompts and workflows.
5. Record model and prompt context where reproducibility matters.
6. Budget latency and cost.
7. Design fallback behavior for provider failure.
8. Treat AI output as untrusted until the surrounding system makes it safe enough for the use case.

### Demonstrate

SmallBizzWizz has a strong architecture story because financial parsing and insight calculations occur before narrative generation.

CMS Rescue is an equally useful lesson in deciding not to use probabilistic guessing when a deterministic relationship repair cannot be proven safe.

The portfolio should explicitly teach this judgment rather than using AI as a visual badge.

## Foundation 10: Technical Communication

### Learn

1. Write READMEs that explain what exists and why it matters.
2. Write ADRs for meaningful tradeoffs.
3. Write case studies around problem, constraint, decision, implementation, evidence, outcome, and limitation.
4. Distinguish measured results from intentions.
5. Make uncertainty visible instead of filling gaps with marketing language.

GitHub guidance for job seeking emphasizes a small number of well presented projects and useful READMEs because reviewers may spend very little time deciding whether to explore further.

## Project Learning Map

### Portfolio V2

Primary lessons: static architecture, typed content, accessibility, performance, browser testing, CI, deployment, design systems, technical communication.

### SmallBizzWizz

Primary lessons: data modeling, deterministic parsing, validation, pipeline architecture, testing, authentication, security, observability, applied AI boundaries.

### CMS Rescue

Primary lessons: platform APIs, conservative automation, state mutation safety, human review design, permission handling, recovery, productization, licensing.

### Craft Product Publisher

Primary lessons: Python application architecture, desktop UI, image processing, ecommerce automation, approval workflows, testing, integration safety.

### Release Guard

Primary lessons: release readiness, deployment state, observability, read only probes, failure prevention. Keep in Lab until it becomes a complete tool.

### Crafty Brother Shopify Theme

Primary lessons: Liquid, ecommerce platform behavior, variant dependent UI, production theme customization. Treat as real world supporting evidence rather than a flagship unless the custom engineering surface grows substantially.

### Prime Lab

Primary lessons: algorithms, mathematics, experiments, visualization, performance reasoning, testable hypotheses.

### Phase

Primary lessons: geometry, procedural systems, browser graphics, Web Audio, refactoring, and testing difficult interactive code.

## Required Learning Sequence

The next implementation sequence should be:

1. Add automated correctness tests to SmallBizzWizz deterministic financial logic.
2. Add deterministic matching tests to CMS Rescue.
3. Make Portfolio V2 dependency installation reproducible.
4. Add Playwright browser tests to Portfolio V2.
5. Add automated accessibility checks and manual keyboard review.
6. Establish and measure Core Web Vitals budgets.
7. Perform a focused OWASP ASVS informed review of SmallBizzWizz trust boundaries.
8. Build a publishable CMS Rescue architecture and safety proof package.
9. Bring Craft Product Publisher repository state up to the implementation actually used in current workflows.
10. Only then invest heavily in decorative motion and advanced visual interaction.

## Graduation Rule

A topic is not considered learned because it was read about or implemented once.

For this project, a topic graduates when Blake can explain the underlying principle, show where it exists in code, demonstrate how it is tested or measured, describe at least one failure mode, and justify the tradeoff without relying on framework slogans.
