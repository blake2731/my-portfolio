# ADR 0001: Portfolio V2 Framework Selection

Status: Proposed.

Date: August 26, 2026.

## Context

The existing portfolio is static HTML, CSS, and JavaScript with JSON project data. V2 needs typed content, reusable case study primitives, strong static delivery, excellent performance, accessible interactions, maintainable project content, automated quality checks, and reliable deployment.

The initial research favored Astro with TypeScript and content collections, but Next.js remains a serious candidate because Blake already uses it and it can demonstrate a familiar production stack.

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
10. Compatibility with the chosen production host.
11. Learning value without unnecessary complexity.
12. Ability for the portfolio itself to demonstrate strong engineering judgment.

## Candidates

### Astro

Expected strengths:

1. Static first architecture.
2. Low JavaScript by default.
3. Content collections fit case study content well.
4. Islands allow selective interactivity.
5. Strong alignment with a content rich portfolio.

Questions to resolve:

1. Hosting and route behavior under the final production target.
2. Exact image pipeline and asset strategy.
3. Testing and interaction architecture for the desired experience.

### Next.js

Expected strengths:

1. Familiar React and TypeScript ecosystem.
2. Strong component model and metadata support.
3. Broad deployment ecosystem.
4. Direct relevance to roles using React and Next.js.

Questions to resolve:

1. Whether the portfolio needs enough application behavior to justify the additional runtime and client complexity.
2. Static export constraints under the final hosting model.
3. Whether a React heavy architecture would weaken the performance and simplicity story compared with Astro.

## Decision

Pending evidence audit and a requirement based comparison.

Do not choose the framework because it is trendy or familiar. Choose the option that best satisfies the portfolio product requirements with the smallest justified complexity.
