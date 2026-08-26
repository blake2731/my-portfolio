---
title: Phase
slug: phase
summary: A browser game whose world, enemies, mechanics, animation, and audio are generated procedurally from mathematics rather than media assets.
projectType: Procedural browser game
status: experiment
visibility: public-source
tier: lab
themes:
  - procedural computing
  - mathematics
  - graphics
  - audio
role: Designer and developer
timeframe: "2026"
problem: Explore whether mathematical systems can generate not only visuals but also game mechanics, geometry, enemy behavior, motion, explosions, and sound inside a small browser experience.
constraints:
  - No image, texture, sprite, music, or sound asset files.
  - Mechanics and presentation should be generated directly in browser code.
stack:
  - JavaScript
  - HTML
  - CSS
  - Canvas API
  - Web Audio API
links:
  repository: https://github.com/blake2731/phase
evidence:
  - type: source
    label: Public procedural implementation
    visibility: public
    source: https://github.com/blake2731/phase
    claim: The public source contains the browser game implementation with no media asset files.
  - type: architecture
    label: Procedural system description
    visibility: public
    source: https://github.com/blake2731/phase/blob/main/README.txt
    claim: Enemy bodies use radial trigonometric functions, wave intersections use circle geometry, prime numbers control symmetry, and audio is synthesized live with the Web Audio API.
outcomes:
  - statement: Phase is strongest as evidence of originality, graphics, geometry, audio synthesis, and procedural thinking rather than production quality process.
    kind: qualitative
---

Phase belongs in the Lab section as a memorable demonstration of technical personality and procedural experimentation.
