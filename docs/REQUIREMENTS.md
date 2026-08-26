# Portfolio V2 Requirements

Status: Draft during discovery.

## Product Requirements

1. The home experience must communicate role, problem solving identity, flagship proof, and contact path immediately.
2. Flagship projects must be ordered by evidence quality and hiring value rather than chronology or sentiment.
3. Each flagship case study must include problem, context, role, architecture, constraints, decisions, implementation evidence, quality evidence, outcome, and links where publishable.
4. The portfolio itself must have a case study explaining its architecture, content model, performance strategy, accessibility strategy, and major technical decisions.
5. Project claims must be backed by source evidence.
6. The site must provide a useful experience with JavaScript enhancements unavailable or reduced where practical.
7. Navigation and deep links must work from local development and the production host.

## Engineering Requirements

1. Use TypeScript for the V2 application unless an ADR explicitly justifies otherwise.
2. Project content must live in a typed or schema validated content model rather than being duplicated across presentation files.
3. Reusable visual and content primitives must replace repeated page markup.
4. Automated checks must cover build integrity, important content schema constraints, and critical user paths.
5. The project must have continuous integration before production release.
6. Dependency and build complexity must remain justified by user or engineering value.
7. Motion must respect reduced motion preferences.
8. No critical content may depend solely on animation or hover state.

## Accessibility Requirements

1. Target WCAG 2.2 AA behavior for portfolio owned interfaces.
2. Provide semantic structure and logical heading hierarchy.
3. Ensure keyboard operability for all interactive controls.
4. Maintain visible focus states.
5. Maintain sufficient color contrast.
6. Provide meaningful image alternatives or decorative treatment as appropriate.
7. Avoid motion patterns that create unnecessary vestibular burden.
8. Validate important pages with automated accessibility checks and manual keyboard review.

## Performance Requirements

1. Establish explicit performance budgets after framework selection.
2. Keep the initial experience fast on ordinary mobile hardware and network conditions.
3. Optimize screenshots and visual assets with appropriate dimensions and modern formats where practical.
4. Avoid shipping large client side libraries for decorative effects that can be implemented more efficiently.
5. Measure Core Web Vitals and Lighthouse behavior before production release.

## SEO and Discoverability Requirements

1. Unique title and description metadata for major pages.
2. Canonical URLs where appropriate.
3. Open Graph metadata.
4. Structured data appropriate to a personal portfolio and project case studies where useful.
5. Sitemap and robots configuration if supported by the selected architecture.
6. Human readable project routes.

## Content Requirements

1. No unverified professional claims.
2. No placeholder project entries in production.
3. Every flagship project must have at least one strong proof artifact such as a public repository, deployed demo, architecture artifact, screenshots, test evidence, or documented implementation walkthrough.
4. Technical language should be specific enough for engineers while remaining scannable for recruiters.
5. SmallBizzWizz should not automatically remain the flagship. Project order is determined by the evidence audit.

## Hosting Requirement

The architecture must support reliable production deployment. If GitHub Pages remains the host, all routing and asset paths must work under its repository path. A host change requires an ADR that explains the value gained.
