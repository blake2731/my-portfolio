# Portfolio Evidence Audit

Status: First repository evidence pass complete. Deeper flagship extraction remains active.

## Purpose

This audit decides what the portfolio can credibly claim and which projects deserve flagship placement.

The score measures portfolio evidence readiness. It is not a judgment of the intrinsic quality of an idea.

## Scoring Model

Score each project from 1 to 5 in each dimension.

1. Technical depth.
2. Real world problem relevance.
3. Engineering discipline.
4. Originality.
5. Visual demonstrability.
6. Public proof quality.
7. Outcome evidence.
8. Relevance to high value software engineering roles.

Maximum score: 40.

The score informs prioritization but does not replace judgment.

## Provisional Ranking After Repository Audit

### 1. SmallBizzWizz

Evidence readiness score: 34 of 40.

Scores:

1. Technical depth: 5.
2. Real world problem relevance: 5.
3. Engineering discipline: 3.
4. Originality: 4.
5. Visual demonstrability: 4.
6. Public proof quality: 5.
7. Outcome evidence: 3.
8. Role relevance: 5.

Why it ranks first today:

1. The repository is public and the application has a public production URL.
2. The repository contains a substantial Next.js application with authenticated workflows, API routes, database integration, spreadsheet processing, analytics surfaces, Stripe, and Anthropic integration.
3. Recent maintenance history demonstrates real defect handling, including spreadsheet upload fixes, iPhone onboarding repair, MIME validation, prompt caching, sensitive file hardening, bot filtering, health diagnostics, and deployment related fixes.
4. Existing work sample evidence documents the pipeline as workbook parsing, validation, normalization, deterministic insights, AI narrative generation, and persistence.
5. The current portfolio already has screenshots, architecture diagrams, and database diagrams for this project.

Weaknesses to fix before using it as the lead case study:

1. The repository README is still essentially the default Next.js starter README and fails to explain the actual system.
2. The package scripts expose build and lint but no automated test suite was found in the first pass.
3. Current portfolio copy sometimes describes intended business impact rather than measured outcomes.
4. The portfolio case study must distinguish deterministic calculations from AI generated narrative work more explicitly.

Recommended role in V2:

Verified flagship unless another project closes its proof gap before launch.

### 2. CMS Rescue

Evidence readiness score: 32 of 40.

Scores:

1. Technical depth: 4.
2. Real world problem relevance: 5.
3. Engineering discipline: 4.
4. Originality: 5.
5. Visual demonstrability: 5.
6. Public proof quality: 2.
7. Outcome evidence: 2.
8. Role relevance: 5.

Repository:

Private repository `blake2731/pluginlab`.

Verified evidence:

1. The README identifies the project as CMS Rescue, a Framer plugin for migration quality assurance and deterministic repair.
2. It detects text fields that appear to represent CMS relationships and handles single and multi collection references.
3. It distinguishes unique deterministic matches from unmatched, ambiguous, conflicting, and broken references.
4. It preserves the original imported source field instead of deleting evidence from the migration.
5. It supports human review by mapping uncertain values to existing CMS items or creating missing items when appropriate.
6. It can export a migration QA report.
7. The project has TypeScript type checking, ESLint with zero warnings, Vite production builds, and Framer Marketplace packaging commands.
8. The release checklist covers fresh projects, empty CMS state, clean data, reference repair, uncertain values, item creation, light mode, dark mode, build, and package verification.
9. Recent commits harden CMS write permission checks and partial failure recovery. Writes are guarded before adding fields or items, and API failures produce recovery instructions instead of silent state corruption.
10. Marketing and product screenshots already make the deterministic repair versus human review model highly demonstrable.

Weaknesses to close:

1. The repository is private, so public source verification is unavailable to a recruiter.
2. No automated test command is exposed in the package scripts in the first pass. The release process currently relies heavily on manual validation.
3. Marketplace publication, active users, repair counts, paid conversions, or other operational outcomes are not yet verified.
4. The repository name `pluginlab` hides the product identity and reduces discoverability inside GitHub.

Recommended role in V2:

Differentiated flagship. It may become the lead project if we can add publishable proof such as a public Marketplace listing, a sanitized technical walkthrough, automated tests, or verified usage evidence.

### 3. Craft Product Publisher

Evidence readiness score: 29 of 40.

Scores:

1. Technical depth: 4.
2. Real world problem relevance: 5.
3. Engineering discipline: 4.
4. Originality: 4.
5. Visual demonstrability: 3.
6. Public proof quality: 2.
7. Outcome evidence: 2.
8. Role relevance: 5.

Repository:

Private repository `blake2731/craft-product-publisher`.

Verified evidence:

1. Python 3.12 desktop application built with PySide6.
2. Master artwork inspection with resolution, orientation, megapixel, and estimated A4 print density checks.
3. Explicit warnings for low resolution and print quality risk.
4. Canonical product naming.
5. Protected watermarked preview generation.
6. Standard square Shopify card generation that preserves full artwork rather than cropping it.
7. Standard eight variant profile with prices and shipping behavior.
8. Editable product metadata review UI.
9. JSON product manifest persistence.
10. Automated pytest coverage for variant definitions, image processing, and manifest persistence is documented and present in the foundation commit.
11. Development tooling includes pytest, pytest coverage, and Ruff.
12. The safety model explicitly separates product creation from final publishing. Future Shopify writes must create Draft products first and final publication requires explicit approval.

Important scope boundary:

The GitHub repository currently proves the local Version 0.1 preparation pipeline. It explicitly states that nothing is published to Shopify from this foundation branch. Do not attribute later Shopify automation behavior to this repository until the newer implementation is committed and audited.

Business context that may become outcome evidence:

Existing professional materials document live Shopify catalog automation for The Crafty Brother and work across hundreds of products and thousands of variants. This is relevant business context, but it must not be presented as an outcome of the current repository until the relationship between that production workflow and this codebase is directly verified.

Weaknesses to close:

1. Repository is private.
2. Current GitHub history contains only the foundation implementation and does not reflect the later workflow state described in recent working sessions.
3. No approved application screenshots are stored in the portfolio yet.
4. Quantified time savings or error reduction for this specific implementation remain unverified.

Recommended role in V2:

Flagship business automation case study once the repository is brought current and the production relationship is documented.

### Portfolio Platform

Status: Under construction and intentionally not scored yet.

The V2 portfolio should eventually become a flagship artifact in its own right. It will be scored after the architecture, typed content model, accessibility strategy, test suite, CI, performance budgets, and production measurements exist.

Required proof:

1. Architecture decision record.
2. Typed or schema validated content model.
3. Automated tests.
4. Continuous integration.
5. Accessibility validation.
6. Performance budgets and measured results.
7. SEO and metadata implementation.
8. Deployment and route reliability.
9. Documented interaction and design system decisions.

### 4. Prime Lab

Evidence readiness score: 25 of 40.

Scores:

1. Technical depth: 3.
2. Real world problem relevance: 2.
3. Engineering discipline: 3.
4. Originality: 4.
5. Visual demonstrability: 4.
6. Public proof quality: 5.
7. Outcome evidence: 1.
8. Role relevance: 3.

Verified evidence:

1. Public repository and reproducible Streamlit application.
2. Computational number theory focus on prime distributions, gaps, modular structure, visualization, and hypothesis testing.
3. A meaningful application file and a dedicated filter module exist.
4. Tests exist for the filtering work.
5. Prior work evidence shows feature branch experimentation across filtering efficiency, residue structure, animation, sonification, and prime gap analysis.

Weaknesses:

1. `prime_lab/primes.py` and `tests/test_primes.py` are currently empty on `main`.
2. README is too short to explain experiments or findings.
3. Business relevance and outcome evidence are naturally weaker than the product projects.

Recommended role in V2:

Supporting proof of curiosity, mathematical experimentation, visualization, and hypothesis driven iteration.

### 5. Phase

Evidence readiness score: 25 of 40.

Scores:

1. Technical depth: 3.
2. Real world problem relevance: 2.
3. Engineering discipline: 1.
4. Originality: 5.
5. Visual demonstrability: 5.
6. Public proof quality: 5.
7. Outcome evidence: 1.
8. Role relevance: 3.

Verified evidence:

1. Public browser game with a substantial JavaScript implementation.
2. Every visual game object is generated by code.
3. Enemy bodies use radial trigonometric functions.
4. Wave weapons use mathematically defined circle fronts and real circle intersection geometry.
5. Enemy symmetry is controlled by prime numbers and the boss cycles through prime frequencies.
6. Movement trails and explosions are generated procedurally.
7. Audio is generated live with the Web Audio API.
8. No image, texture, sprite, music, or sound asset files are used.

Weaknesses:

1. No automated tests or build quality system was found.
2. Architecture is concentrated in a single large `game.js` file.
3. README documentation is minimal and the primary README currently contains a typo.
4. It proves originality better than production engineering discipline.

Recommended role in V2:

Memorable supporting showcase that demonstrates personality, mathematical creativity, graphics, audio, and browser engineering.

## Revised Portfolio Hierarchy

Current evidence based hierarchy:

1. SmallBizzWizz as the strongest fully verifiable flagship today.
2. CMS Rescue as the strongest differentiated flagship candidate.
3. Craft Product Publisher as the strongest business automation flagship candidate once current work is committed and verified.
4. Portfolio Platform as a future flagship to earn its position through V2 implementation quality.
5. Prime Lab and Phase as supporting proof of experimentation and originality.

This hierarchy should be revisited before content lock. CMS Rescue or Craft Product Publisher can overtake SmallBizzWizz if their proof gaps are closed.

## Current Site Evidence Gaps

1. Current project data exposes only three projects.
2. Multiple project links are blank.
3. Several project entries describe intended impact rather than measured impact.
4. SmallBizzWizz occupies disproportionate homepage space despite not being the only strong engineering story.
5. The current site does not expose testing, CI, architecture tradeoffs, performance measurements, or accessibility verification for itself.
6. The current Craft Product Publisher description does not accurately represent the current Python and PySide6 foundation implementation.
7. CMS Rescue does not appear in the current portfolio data at all.
8. Prime Lab and Phase do not appear in the current portfolio data at all.

## Next Evidence Extraction

1. Extract a publishable technical narrative from CMS Rescue without exposing private source unnecessarily.
2. Bring Craft Product Publisher GitHub state up to the actual current implementation before making claims about Shopify write workflows.
3. Rewrite the SmallBizzWizz repository README around the real architecture and operating behavior.
4. Determine whether SmallBizzWizz has existing automated tests outside the first pass. If none exist, treat that as an explicit quality gap.
5. Identify or create approved screenshots for CMS Rescue and Craft Product Publisher.
6. Record only verified outcome metrics and distinguish business context from codebase specific outcomes.
7. Build the Portfolio Platform evidence as V2 is implemented.

## Exit Criteria

Discovery can move to implementation planning when:

1. Flagship repositories have been inspected directly.
2. Every flagship claim has an evidence source or is removed.
3. Project ranking has been updated using the scoring model.
4. Case study content inventory is known.
5. Architecture requirements are clear enough to decide between Astro and Next.js.
6. Private project proof strategy is decided for CMS Rescue and Craft Product Publisher.
