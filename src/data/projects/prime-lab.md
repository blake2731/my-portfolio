---
title: Prime Lab
slug: prime-lab
summary: A computational number theory laboratory for exploring prime filtering, modular structure, visualization, and hypotheses through reproducible experiments.
projectType: Computational experiment
status: experiment
visibility: public-source
tier: lab
themes:
  - mathematics
  - visualization
  - experimentation
role: Designer and developer
timeframe: "2026"
problem: Prime number patterns are difficult to reason about from formulas alone, so the project turns filtering and modular relationships into interactive experiments that can be inspected and tested.
constraints:
  - Experiments should remain reproducible rather than exist only as visual effects.
  - Mathematical filters need boundary and invalid input behavior that can be tested directly.
stack:
  - Python
  - Streamlit
  - Plotly
  - NumPy
  - pandas
  - pytest
links:
  repository: https://github.com/blake2731/prime-lab
evidence:
  - type: source
    label: Public experiment source
    visibility: public
    source: https://github.com/blake2731/prime-lab
    claim: The repository contains the Streamlit application, prime filtering module, and test files for the implemented filtering work.
  - type: test
    label: Filter tests
    visibility: public
    source: https://github.com/blake2731/prime-lab/blob/main/tests/test_filters.py
    claim: Tests cover implemented filtering behavior while unfinished prime modules remain visibly incomplete rather than being presented as finished work.
outcomes:
  - statement: The project demonstrates hypothesis driven iteration and visualization, while unfinished modules on main remain explicitly outside the finished evidence claim.
    kind: observed
---

Prime Lab belongs in the Lab section because it demonstrates mathematical curiosity and experimental discipline rather than production business software.
