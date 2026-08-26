# ADR 0001: Portfolio V2 Framework Selection

Status: Accepted.

Date: August 26, 2026.

## Context

The existing portfolio is static HTML, CSS, and JavaScript with JSON project data. V2 needs typed content, reusable case study primitives, strong static delivery, excellent performance, accessible interactions, maintainable project content, automated quality checks, and reliable deployment.

The evidence audit also clarified that the site is primarily a content and proof system. It needs selective interactive explanations, but it does not need application wide client state, authenticated behavior, server mutations, or an application server.

## Decision Drivers

1. Static portfolio performance.
2. Amount of client side JavaScript shipped by default.
3. Typed and validated project content.
4. Ease of creating reusable case study layouts.
5. Ability to add selective rich interactions.
6. Image handling.
7. SEO and metadata support.
8. Automated testing support.
9. Deployment reliability.
10. Compatibility with GitHub Pages and future custom domain hosting.
11. Learning value without unnecessary complexity.
12. Ability for the portfolio itself to demonstrate strong engineering judgment.

## Decision

Use Astro with TypeScript as the Portfolio V2 application framework.

Use Astro content collections for project and case study metadata.

Use static generation as the default output model.

Use Astro components for noninteractive presentation and layout.

Use client side JavaScript only for interactions that create explanatory or navigational value.

Do not add React merely because it is familiar. A React integration may be introduced later for an interaction whose state complexity genuinely benefits from it, and that addition should be justified by implementation evidence.

## Why Astro

### Static first behavior matches the product

The portfolio is predominantly durable content, project evidence, diagrams, screenshots, writing, and navigation. Astro renders components to static HTML by default and only hydrates components explicitly marked for client behavior.

This makes performance discipline structural rather than aspirational.

### Content collections match the evidence system

The portfolio needs project entries with stable schemas, validated proof links, visibility rules, technologies, evidence artifacts, outcomes, and case study content. Astro content collections provide a typed content layer that can validate these fields at build time.

### Selective interactivity supports the design direction

The experience can still include sophisticated interactions such as system diagrams, evidence explorers, controlled motion, project transitions, and procedural details without turning every page into a client rendered React application.

### GitHub Pages is a supported deployment target

Astro documents an official GitHub Pages deployment workflow using GitHub Actions. The project can configure the repository base path and use the framework supplied base URL value rather than scattering a hardcoded repository prefix throughout source files.

### It adds useful learning value

SmallBizzWizz already demonstrates Next.js and React. Using Astro for the portfolio broadens demonstrated frontend architecture judgment instead of duplicating the same stack for a problem that does not require it.

## Why Not Next.js for V2

Next.js remains an excellent application framework and static export is supported. However, static export intentionally does not support server dependent features and requires special handling for capabilities such as the default image optimizer.

The portfolio does not currently need the full application model that makes Next.js most valuable. Choosing it mainly for familiarity or keyword recognition would make the architecture harder to justify.

Next.js remains strongly represented through the SmallBizzWizz case study.

## Hosting Strategy

Initial production target remains GitHub Pages unless a later ADR justifies a host change.

Configuration must support both local development and repository path deployment.

Use Astro configuration for the production `site` and `base` values.

Internal URL generation must centralize base path handling using framework supplied path information such as `import.meta.env.BASE_URL` or equivalent helpers. Do not write `/my-portfolio` into individual components.

A future custom domain should require configuration changes rather than rewriting content links.

## Interaction Strategy

1. Prefer semantic HTML and CSS for baseline behavior.
2. Prefer browser platform capabilities for simple interaction.
3. Use small TypeScript modules when state is local and straightforward.
4. Use Astro client islands only when interaction requires browser execution.
5. Add React only when component state complexity justifies it.
6. Respect reduced motion from the first implementation.
7. No critical content may require JavaScript, hover, or animation to be understood.

## Consequences

Positive consequences:

1. Lower default JavaScript cost.
2. Strong typed content architecture.
3. Natural static case study generation.
4. Clear separation between content and interactive islands.
5. Strong fit for GitHub Pages.
6. A differentiated portfolio architecture alongside existing Next.js work.

Tradeoffs:

1. Astro is a new framework surface to learn and maintain.
2. Complex client interactions may require additional integration decisions.
3. Repository path hosting still requires disciplined URL construction.
4. Some React specific component libraries cannot be adopted thoughtlessly without adding client cost.

## Revisit Conditions

Reopen this ADR only if V2 requirements materially change to require authenticated application state, server side mutations, dynamic request time personalization, or another feature that makes a full application server meaningfully more appropriate.
