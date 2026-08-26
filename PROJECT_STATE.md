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

Status: Active.

Branch: `portfolio-v2`

Production branch: `main`

## Completed

1. Researched current portfolio expectations, engineering hiring signals, interaction trends, accessibility expectations, performance expectations, and modern portfolio patterns.
2. Identified the strongest narrative around systems thinking, workflow automation, product engineering, and applied AI.
3. Established provisional flagship priority: CMS Rescue, Craft Product Publisher, Portfolio Platform, SmallBizzWizz, then Prime Lab and Phase as supporting proof.
4. Created the isolated `portfolio-v2` branch from the untouched production baseline.
5. Audited the current repository structure and homepage content.
6. Created the V2 operating documents under this branch.

## Baseline Findings

1. The current site is a static HTML, CSS, and JavaScript application with JSON driven project data and reusable navbar and footer components.
2. The current homepage gives SmallBizzWizz substantially more proof space than every other project.
3. The current project data contains only SmallBizzWizz, The Crafty Brother Upload Tool, and Application Security Research.
4. Public proof is incomplete for multiple projects. Several GitHub, live demo, case study, and screenshot fields are empty or marked TODO.
5. The site has useful semantic and responsive work already present, but its accessibility, SEO, testing, performance, and evidence systems are incomplete.
6. The repository has no V2 build system, formal test suite, CI quality gate, content schema, or documented architecture decision process yet.
7. The existing README and Backlog reflect the 2025 optimization cycle and are not sufficient to operate the new project lifecycle.

## Active Work

1. Complete the evidence audit across the flagship repositories.
2. Score candidate projects by technical depth, business relevance, visual demonstrability, proof quality, originality, and hiring value.
3. Convert the evidence audit into product requirements and content requirements.
4. Compare Astro and Next.js against the actual portfolio requirements and record the architecture decision.

## Immediate Next Move

Audit the candidate flagship repositories directly, starting with CMS Rescue and Craft Product Publisher, then Portfolio Platform, SmallBizzWizz, Prime Lab, and Phase. Capture concrete evidence such as architecture, tests, workflows, automation, technical constraints, screenshots, deployment state, and measurable outcomes.

Do not begin visual redesign until this evidence pass and the V2 requirements are stable.

## Working Rules

1. Evidence before aesthetics.
2. Claims must be traceable to code, documentation, screenshots, deployed behavior, or verifiable outcomes.
3. Production on `main` stays stable until V2 passes the quality gates.
4. New implementation work happens on focused branches derived from `portfolio-v2` once architecture is selected.
5. Paths must work locally and on GitHub Pages or the selected production host without hardcoded repository prefixes.
6. Accessibility, performance, SEO, responsiveness, and reduced motion behavior are release requirements, not cleanup tasks.
7. Every major architectural decision gets an ADR.
8. Every work session updates this file when project state materially changes.

## Definition of V2 Success

The finished portfolio should make a technically literate reviewer understand within roughly one minute what kinds of problems Blake solves, why the work is credible, where the strongest engineering evidence lives, and how to contact or evaluate him further. Deeper exploration should reward engineering managers with architecture, tradeoffs, testing, system behavior, and outcomes rather than marketing copy alone.
