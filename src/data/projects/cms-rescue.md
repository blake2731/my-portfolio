---
title: CMS Rescue
slug: cms-rescue
summary: A Framer plugin that audits CMS migrations, repairs uniquely resolvable relationships, and routes uncertain values to human review.
projectType: Framer plugin
status: active-development
visibility: private-source-with-publishable-evidence
tier: flagship
featuredRank: 2
themes:
  - reliability
  - automation
  - data
  - safety
  - platform integration
role: Product designer and software engineer
timeframe: 2026
problem: CMS migrations can leave relationship data as plain text or broken references, creating cleanup work where aggressive automation risks corrupting imported content.
constraints:
  - Automatic repair must occur only when a unique deterministic match exists.
  - Original imported source fields must be preserved.
  - Ambiguous, unmatched, or conflicting values require explicit review.
  - CMS writes must respect Framer permissions and recover clearly from partial failures.
stack:
  - TypeScript
  - React
  - Vite
  - Framer Plugin API
evidence:
  - type: screenshot
    label: Publishable product workflow
    visibility: public
    source: Approved CMS Rescue product screenshots retained in the portfolio evidence library
    claim: The interface visibly separates safe automatic fixes from review signals and communicates source preservation.
  - type: source
    label: Private implementation audit
    visibility: private
    source: Private repository audit completed August 26, 2026
    claim: The implementation detects relationship candidates, repairs single and multi references, preserves imported source fields, maps uncertain values, and can create missing CMS items when appropriate.
  - type: commit
    label: CMS write hardening
    visibility: private
    source: Private repository commit c4f25d6e89f563e2453b3b908de85dc03250e6bc
    claim: The implementation explicitly checks CMS write permissions and reports recovery instructions when field or item writes fail.
outcomes:
  - statement: The repair model intentionally prefers unresolved review work over unsafe automatic mutation when a relationship cannot be matched uniquely.
    kind: observed
---

The public case study will explain the deterministic safety model and recovery workflow without exposing private source code that is not necessary to verify the engineering decisions.
