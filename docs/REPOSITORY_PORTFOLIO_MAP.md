# Repository Portfolio Map

Updated: August 26, 2026

## Purpose

Not every repository should appear in the portfolio, and appearing in the portfolio is not the same as being pinned on GitHub.

The goal is to curate a small body of work where each project proves a different engineering capability.

## Tier A: Flagship Engineering Stories

### SmallBizzWizz

Repository: `blake2731/smallbizzwizz`

Role: Flagship.

Why it matters:

1. Public source.
2. Public production application.
3. Next.js, React, TypeScript, PostgreSQL, authentication, billing, APIs, spreadsheet processing, and AI integration in one system.
4. Strong deterministic data pipeline with parsing, validation, normalization, insight generation, narrative generation, persistence, diagnostics, and explicit processing states.
5. Repository history contains real production defect fixes and operational hardening.

Current weaknesses:

1. No automated application test suite is exposed through `package.json`.
2. Outcome metrics remain limited.
3. The public README on `main` is still default framework boilerplate until the documentation PR is merged.

Next move:

Add deterministic parser and pipeline tests, then build the complete Portfolio V2 case study.

### CMS Rescue

Repository: `blake2731/pluginlab`, private.

Role: Flagship and strongest differentiated product story.

Why it matters:

1. Real migration quality problem.
2. Deterministic repair instead of unsafe guessing.
3. Human review for ambiguity.
4. Source preservation.
5. Framer permission handling and recovery behavior.
6. Product licensing and activation work.
7. Marketplace packaging and launch preparation.
8. Security review hardening history.

Current weaknesses:

1. Source is private.
2. No automated test suite was found.
3. Public Marketplace publication and usage outcomes remain unverified.
4. Repository name does not identify the actual product.

Next move:

Extract deterministic matching logic behind testable boundaries, add tests, and build a publishable architecture and safety proof package.

### Craft Product Publisher

Repository: `blake2731/craft-product-publisher`, private.

Role: Flagship business automation story.

Why it matters:

1. Python desktop application rather than another web application.
2. Real ecommerce preparation workflow.
3. Image inspection and asset generation.
4. Variant modeling and manifest persistence.
5. Automated tests already exist for the foundation.
6. Approval boundaries prevent preparation logic from becoming unsafe automatic publishing.

Current weaknesses:

1. Current GitHub history proves only the foundation version.
2. Later Shopify workflow work discussed during current development is not yet represented by the audited repository state.
3. Public visual proof is incomplete.
4. Quantified workflow outcomes remain unverified for this codebase.

Next move:

Bring repository state current, preserve the tested approval model, then capture screenshots and workflow evidence.

## Tier B: Supporting Real World Engineering

### Crafty Brother Shopify Theme

Repository: `blake2731/craftybrothertheme`, private.

Role: Supporting production commerce evidence.

Verified value:

The repository begins from Shopify Dawn and contains production customization for variant aware pricing and shipping messaging. Digital variants avoid irrelevant shipping language while physical variants retain Shopify shipping behavior.

Why it should not be a standalone flagship yet:

The custom engineering surface is currently much smaller than the flagship systems. Its strongest role is supporting evidence inside the broader ecommerce automation story.

### Matthews Detail

Repository: `blake2731/matthews-detail`.

Role: Supporting real business delivery.

Verified value:

1. Public repository.
2. Custom domain configuration for `matthewsdetail.com`.
3. Complete static production website rather than a classroom exercise.

Current weaknesses:

1. No README.
2. Limited application complexity.
3. Several large image assets create an obvious performance improvement opportunity.

Next move:

Add a concise README, optimize large assets if the site is still actively maintained, and use it as evidence that software work has reached a real operating business.

### Tiny Python Utils

Repository: `blake2731/tiny-python-utils`.

Role: Supporting quality and Python signal.

Verified value:

Small utilities, pytest instructions, and a narrow code surface that can make testing and CI easy for a reviewer to understand quickly.

Use it as supporting proof rather than a case study.

## Tier C: Lab and Technical Personality

### Prime Lab

Repository: `blake2731/prime-lab`.

Role: Lab.

Why it matters:

Mathematics, computation, visualization, experimentation, and hypothesis driven iteration.

Next move:

Finish or remove empty modules, improve the README around actual experiments and findings, and keep tests aligned with implemented behavior.

### Phase

Repository: `blake2731/phase`.

Role: Lab.

Why it matters:

Procedural browser graphics, trigonometric geometry, prime driven mechanics, Canvas rendering, and synthesized Web Audio with no media asset dependency.

Next move:

Refactor the concentrated game architecture enough to make one or two core systems testable. Preserve the unusual procedural character of the project.

### Release Guard Spike

Repository: `blake2731/releaseguardspike`, private.

Role: Lab and possible future product.

Verified value:

The current implementation is a read only Framer capability probe for active branch state, unpublished page changes, deployments, and deployment issues. It catches capability failures individually and intentionally performs no protected writes.

Why it is not a flagship yet:

1. It remains a spike.
2. README is still the Framer template.
3. No automated tests.
4. No complete release decision model or user outcome yet.

Next move:

Only continue if product research shows a useful release readiness problem that Framer exposes enough state to solve safely.

## Tier D: Older Learning Projects

These repositories can remain public but should not occupy the primary portfolio story unless substantial new engineering work changes their evidence quality.

Examples include:

1. `Task-Manager`.
2. `creative-brainstorm-AI`.
3. `ecommerce-java-springboot`.
4. `open-house-leads-manager`.
5. Earlier finance tracker experiments.
6. Small browser game exercises.

Reasons:

1. Newer projects prove the same technologies more convincingly.
2. Several READMEs still contain tutorial style placeholders.
3. Some projects are skeletal or incomplete.
4. Featuring them would make the portfolio look broader but weaker.

## Tier E: Coursework, Tutorials, Forks, and External Codebases

Repositories such as class projects, framework tutorials, large external codebases, and protocol repositories should not be treated as original portfolio projects unless a specific original contribution can be isolated and verified.

This includes repositories whose names or documentation indicate tutorials, coursework, or upstream project history, such as Angular learning repositories, MEAN stack learning repositories, Hardhat tutorials, CS course repositories, and large external projects.

### BioBase special case

`blake2731/biobase` has substantial documentation, but that documentation identifies `lignum-vitae/biobase` as the project source and contribution destination.

Do not present the entire repository as an independently owned Blake project without first auditing Blake specific commits or pull requests.

If meaningful contributions exist, present them as open source contribution evidence instead. That can be more credible than implying ownership of the full package.

## Recommended Public GitHub Pins

Once the documentation changes are merged, the strongest initial public pin set is:

1. `my-portfolio`.
2. `smallbizzwizz`.
3. `prime-lab`.
4. `phase`.
5. `tiny-python-utils`.

`matthews-detail` can replace `tiny-python-utils` after its README and performance presentation are improved if real business delivery is more useful for the target role.

Do not use public pin space merely to maximize language variety.

## Homepage Portfolio Rule

The homepage should contain only three flagship stories at launch:

1. SmallBizzWizz.
2. CMS Rescue.
3. Craft Product Publisher.

The order can change after proof gaps close.

The Work page can contain selected supporting business evidence.

The Lab page contains Prime Lab, Phase, and any future experiments that demonstrate real technical curiosity.

## Selection Principle

A project earns space by answering a question a hiring manager might ask.

SmallBizzWizz answers: Can this engineer build and maintain a substantial full stack product with structured data and AI?

CMS Rescue answers: Can this engineer design safe automation around ambiguous real world data and a third party platform API?

Craft Product Publisher answers: Can this engineer automate a business workflow outside the browser while preserving review and safety boundaries?

Matthews Detail and Shopify theme work answer: Has this engineer delivered software that real businesses actually use?

Prime Lab answers: Does this engineer investigate technical ideas beyond immediate product requirements?

Phase answers: Can this engineer create unusual interactive systems from mathematical primitives?

If a repository does not add a new and credible answer, it does not need portfolio space.
