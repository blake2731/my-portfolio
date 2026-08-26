---
title: BioBase Open Source Contribution
slug: biobase-contribution
summary: A merged contribution to the BioBase Python library adding Codon Adaptation Index calculation with explicit biological edge cases and automated tests.
projectType: Open source contribution
status: active-development
visibility: public-source
tier: supporting
themes:
  - open source
  - testing
  - algorithms
  - bioinformatics
role: External contributor
timeframe: November 2025
problem: BioBase needed a Codon Adaptation Index implementation that could calculate codon usage adaptation while handling DNA and RNA input, stop codons, incomplete codons, missing reference coverage, and invalid input predictably.
constraints:
  - The contribution had to fit an existing external codebase rather than define its own architecture.
  - Biological edge cases needed explicit behavior instead of accidental numerical results.
  - The implementation needed tests that maintainers could evaluate independently.
stack:
  - Python
  - pytest
links:
  repository: https://github.com/lignum-vitae/biobase
  report: https://github.com/lignum-vitae/biobase/pull/15
evidence:
  - type: source
    label: Merged upstream pull request
    visibility: public
    source: https://github.com/lignum-vitae/biobase/pull/15
    claim: Pull request 15 was authored by blake2731 and merged into the upstream BioBase repository on November 3, 2025.
  - type: test
    label: Tested CAI implementation
    visibility: public
    source: https://github.com/lignum-vitae/biobase/pull/15
    claim: The merged contribution documents tests for the normal calculation path, DNA handling, stop codons, partial codons, and invalid input behavior.
  - type: commit
    label: Upstream merge commit
    visibility: public
    source: https://github.com/lignum-vitae/biobase/commit/c95fa9c23343852b48deb3a9915accb12923984f
    claim: The contribution was accepted into the upstream main branch rather than remaining only in a personal fork.
outcomes:
  - statement: The Codon Adaptation Index contribution was reviewed and merged into the external BioBase project.
    kind: observed
---

## Why this work is different from a personal project

The engineering constraint in an open source contribution is not simply whether the code works in isolation.

The contribution has to fit somebody else's package structure, conventions, domain assumptions, tests, and review expectations.

That makes the accepted pull request the important artifact rather than the existence of the fork.

## The calculation

Codon Adaptation Index is a measure of how strongly a coding sequence uses codons preferred by a reference set.

The contribution computes a relative weight for each codon from its observed reference frequency compared with the maximum frequency in the synonymous codon family. The sequence score is then derived from the geometric mean of the usable codon weights.

The mathematical formula is only part of the implementation problem. The edge conditions determine whether the function is reliable enough to belong in a shared library.

## Edge cases made explicit

The merged pull request documents behavior for:

1. DNA and RNA inputs, including conversion of thymine based DNA codons to the RNA representation used by the calculation,
2. stop codons, which are excluded from the CAI calculation,
3. synonymous codon families that have no usable reference coverage,
4. sequences containing a final incomplete codon,
5. invalid input cases,
6. normal reference and sequence inputs used to verify the expected calculation path.

These cases were backed by automated tests rather than left only in prose.

## Review and iteration

The contribution history also contains follow up changes addressing review feedback, including earlier guards, renamed variables, and helper extraction.

That is useful portfolio evidence because it shows engineering work changing in response to an external review process instead of only self review.

## Correct attribution

BioBase itself is not presented as my project.

The portfolio claim is intentionally narrower and stronger: I contributed a tested Codon Adaptation Index feature to the upstream project, and that contribution was accepted and merged.

That distinction matters. A verifiable contribution to somebody else's codebase is better evidence than overstating ownership of the entire repository.
