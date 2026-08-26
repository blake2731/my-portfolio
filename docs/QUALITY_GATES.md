# Portfolio V2 Quality Gates

Status: Initial gates. Numeric budgets will be finalized after framework selection and baseline measurement.

## Gate 1: Build Integrity

1. Production build succeeds from a clean checkout.
2. No unresolved asset or route failures.
3. No accidental hardcoded repository prefix dependencies.
4. Content schema validation passes.

## Gate 2: Functional Quality

1. Primary navigation works on desktop and mobile.
2. Flagship project routes work directly and through internal navigation.
3. External proof links are valid.
4. Contact paths work.
5. Critical interactions have automated coverage where practical.

## Gate 3: Accessibility

1. No known critical accessibility violations on primary pages.
2. Full keyboard navigation succeeds.
3. Focus state is visible.
4. Reduced motion preference is respected.
5. Heading and landmark structure is coherent.
6. Image alternatives are reviewed manually.

## Gate 4: Performance

1. Performance budgets are documented.
2. Lighthouse and Core Web Vitals measurements are recorded for representative pages.
3. Large images are intentionally sized and optimized.
4. Client side JavaScript is reviewed for necessity.
5. No decorative dependency creates disproportionate bundle cost.

## Gate 5: Content Integrity

1. Every flagship claim is verified.
2. No placeholder TODO content is exposed in production.
3. No invented outcome metrics.
4. Project role and contribution are unambiguous.
5. Case study evidence matches repository reality.

## Gate 6: SEO and Sharing

1. Metadata is unique and accurate.
2. Canonical handling is correct.
3. Social sharing metadata works.
4. Sitemap and robots behavior are correct for the chosen host.
5. Structured data is valid where used.

## Gate 7: Responsive and Browser Review

1. Important pages are reviewed at narrow mobile, large mobile, tablet, laptop, and desktop widths.
2. Navigation remains usable at every target width.
3. Important content does not depend on hover.
4. Layout does not create accidental horizontal scrolling.
5. Current major Chromium, Firefox, and Safari behavior is reviewed before release.

## Gate 8: Release Evidence

1. CI is green.
2. Architecture decisions are recorded.
3. `PROJECT_STATE.md` reflects release status.
4. The production deployment is smoke tested after release.
5. The portfolio platform case study records measured quality results.
