---
title: Craft Product Publisher
slug: craft-product-publisher
summary: A desktop product preparation pipeline that inspects artwork, generates protected previews and Shopify ready assets, models variants, and persists reviewable product manifests.
projectType: Desktop automation application
status: active-development
visibility: private-source-with-publishable-evidence
tier: flagship
featuredRank: 3
themes:
  - automation
  - commerce
  - image processing
  - workflow design
  - safety
role: Product software and automation engineer
timeframe: 2026
problem: Preparing craft artwork for ecommerce requires repetitive image checks, preview generation, product metadata, variants, and publishing decisions that are easy to perform inconsistently by hand.
constraints:
  - Low resolution or risky print assets must be surfaced before publishing.
  - Square ecommerce cards must preserve the complete artwork rather than crop it.
  - Product creation and final publication must remain separate approval boundaries.
stack:
  - Python 3.12
  - PySide6
  - Pillow
  - pytest
  - Ruff
evidence:
  - type: report
    label: Publishable repository audit summary
    visibility: public
    source: Sanitized repository evidence audit completed August 26, 2026
    claim: The current foundation implements image inspection, protected preview generation, square Shopify card generation, variant definitions, editable metadata, and manifest persistence.
  - type: test
    label: Automated foundation tests
    visibility: private
    source: Private repository test suite audited August 26, 2026
    claim: The repository includes pytest coverage for variant definitions, image processing, and manifest persistence.
  - type: source
    label: Controlled publishing boundary
    visibility: private
    source: Private repository README audited August 26, 2026
    claim: The documented safety model keeps product creation separate from final Shopify publication and requires explicit approval before publishing.
outcomes:
  - statement: The audited repository currently proves the local preparation pipeline only; later Shopify write behavior is intentionally excluded until that implementation is committed and verified.
    kind: observed
---

This case study will remain conservative until the repository reflects the newer workflow state. Business wide catalog metrics will not be attributed to this codebase unless the connection is directly verified.
