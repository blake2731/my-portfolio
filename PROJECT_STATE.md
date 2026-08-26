# Portfolio V2 Project State

Updated: August 26, 2026

## Mission

Build a recruiter ready engineering portfolio that demonstrates product judgment, technical depth, originality, trustworthy execution, and the ability to turn messy real world problems into dependable software systems.

## Positioning

Primary positioning statement:

I turn messy real world problems into trustworthy software systems.

The portfolio should prove this statement through evidence rather than rely on claims alone.

## Current Phase

Phase 1: Discovery, evidence audit, and product requirements.

Status: Active, with first repository evidence pass complete.

Branch: `portfolio-v2`

Production branch: `main`

## Completed

1. Researched current portfolio expectations, engineering hiring signals, interaction trends, accessibility expectations, performance expectations, and modern portfolio patterns.
2. Identified the strongest narrative around systems thinking, workflow automation, product engineering, and applied AI.
3. Created the isolated `portfolio-v2` branch from the untouched production baseline.
4. Audited the current portfolio repository structure, content model, homepage hierarchy, and existing proof gaps.
5. Created the V2 operating documents, requirements, design principles, quality gates, and initial framework ADR.
6. Located and inspected the actual CMS Rescue implementation in the private `blake2731/pluginlab` repository.
7. Inspected Craft Product Publisher, SmallBizzWizz, Prime Lab, and Phase repository evidence.
8. Recorded the first evidence readiness scorecard in `docs/EVIDENCE_AUDIT.md`.
9. Revised the provisional flagship hierarchy using code evidence rather than initial assumptions.

## Baseline Findings

1. The current site is a static HTML, CSS, and JavaScript application with JSON driven project data and reusable navbar and footer components.
2. The current homepage gives SmallBizzWizz substantially more proof space than every other project.
3. The current project data contains only SmallBizzWizz, The Crafty Brother Upload Tool, and Application Security Research.
4. Public proof is incomplete for multiple projects. Several GitHub, live demo, case study, and screenshot fields are empty or marked TODO.
5. The site has useful semantic and responsive work already present, but its accessibility, SEO, testing, performance, and evidence systems are incomplete.
6. The repository has no V2 build system, formal test suite, CI quality gate, typed content schema, or completed architecture decision yet.
7. The existing README and Backlog reflect the 2025 optimization cycle and are not sufficient to operate the new project lifecycle.

## Evidence Audit Findings

### SmallBizzWizz

Current evidence readiness: 34 of 40.

It is the strongest fully verifiable flagship today because the source is public, the system is substantial, production evidence exists, and repository history demonstrates ongoing defect handling. Its main weaknesses are a default starter README, no automated test command found in the first pass, and outcome claims that need tighter measurement.

### CMS Rescue

Current evidence readiness: 32 of 40.

CMS Rescue is real implemented software, not only a concept. The private `pluginlab` repository verifies deterministic CMS repair, conservative human review routing, source preservation, Framer permission checks, recovery behavior, linting, type checking, builds, Marketplace packaging, and a detailed release checklist. Its main proof gaps are private source, no automated test command found in the first pass, and no verified operational outcome yet.

### Craft Product Publisher

Current evidence readiness: 29 of 40.

The private repository verifies a Python 3.12 and PySide6 desktop preparation pipeline with image quality inspection, protected previews, Shopify card generation, variant modeling, manifest output, automated tests, and explicit publication safety gates. The repository currently proves Version 0.1 only and does not yet contain the later Shopify workflow state discussed in recent work.

### Prime Lab

Current evidence readiness: 25 of 40.

Strong supporting evidence for computational experimentation and visualization, but parts of the package and tests remain empty on `main`, and business outcome relevance is limited.

### Phase

Current evidence readiness: 25 of 40.

Strong supporting evidence for originality and procedural browser engineering. It uses mathematical graphics, geometry, prime driven mechanics, and live Web Audio with no media assets. It currently lacks automated tests and has a concentrated single file architecture.

### Portfolio Platform

Not scored yet. It must earn flagship status through the V2 architecture, content model, automated testing, CI, accessibility, performance, SEO, deployment quality, and documented technical decisions.

## Revised Portfolio Hierarchy

1. SmallBizzWizz as the strongest fully verifiable flagship today.
2. CMS Rescue as the strongest differentiated flagship candidate.
3. Craft Product Publisher as the strongest business automation flagship candidate once the repository reflects current work.
4. Portfolio Platform as a future flagship that must earn its position during implementation.
5. Prime Lab and Phase as supporting proof of experimentation and originality.

This order is provisional. CMS Rescue or Craft Product Publisher may overtake SmallBizzWizz when their proof gaps close.

## Active Work

1. Extract publishable flagship narratives and content inventories from the evidence audit.
2. Decide how private projects will expose credible technical proof without publishing sensitive source.
3. Compare Astro and Next.js against the now clearer requirements and record the architecture decision.
4. Define the V2 information architecture and typed project content model.
5. Turn the lifecycle into trackable GitHub issues.

## Immediate Next Move

Resolve the architecture decision using the actual portfolio requirements, then define the V2 content schema and information architecture around the revised flagship hierarchy.

Do not begin decorative visual redesign before the architecture, content model, and flagship proof strategy are stable.

## Working Rules

1. Evidence before aesthetics.
2. Claims must be traceable to code, documentation, screenshots, deployed behavior, or verifiable outcomes.
3. Production on `main` stays stable until V2 passes the quality gates.
4. New implementation work happens on focused branches derived from `portfolio-v2` once architecture is selected.
5. Paths must work locally and on GitHub Pages or the selected production host without hardcoded repository prefixes.
6. Accessibility, performance, SEO, responsiveness, and reduced motion behavior are release requirements, not cleanup tasks.
7. Every major architectural decision gets an ADR.
8. Every work session updates this file when project state materially changes.
9. Private repositories may support case studies, but the public portfolio must provide enough publishable evidence for a reviewer to verify the engineering story.

## Definition of V2 Success

The finished portfolio should make a technically literate reviewer understand within roughly one minute what kinds of problems Blake solves, why the work is credible, where the strongest engineering evidence lives, and how to contact or evaluate him further. Deeper exploration should reward engineering managers with architecture, tradeoffs, testing, system behavior, and outcomes rather than marketing copy alone.
