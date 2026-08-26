# Portfolio V2 Content Model

Status: Approved for Astro foundation design.

## Goal

Project content must be structured enough to validate claims and generate consistent pages without forcing every project into identical storytelling.

Use an Astro content collection named `projects` with a strict schema.

## Project Entry

Each project should define the following fields.

### Identity

`title`

Human readable project name.

`slug`

Stable route identifier.

`summary`

Short statement of what the system does.

`projectType`

Examples include SaaS application, Framer plugin, desktop automation, experiment, or browser game.

`status`

Examples include production, active development, prototype, experiment, archived.

`visibility`

Public proof posture such as public source, private source with publishable evidence, or demo only.

### Portfolio Placement

`tier`

One of flagship, supporting, or lab.

`featuredRank`

Optional numeric ordering for homepage placement.

`themes`

Controlled values such as systems, automation, applied AI, reliability, data, commerce, security, visualization, procedural computing.

### Role and Context

`role`

Exact contribution and ownership.

`timeframe`

Human readable timeframe supported by repository history or project records.

`problem`

The real problem that motivated the work.

`constraints`

List of important technical, product, business, or safety constraints.

### Technology

`stack`

Array of technologies that are directly verified for this project.

Do not add technologies only because they appear elsewhere in professional materials.

### Proof

`links`

Optional structured links for repository, live application, Marketplace, demo, report, or external documentation.

`evidence`

Array of evidence records.

Each evidence record should contain:

1. `type`, such as source, screenshot, architecture, test, deployment, commit, metric, report, or demo.
2. `label`.
3. `visibility`, such as public or private.
4. `source`, a repository path, URL, artifact identifier, or internal evidence note.
5. `claim`, the exact claim the evidence supports.

### Outcomes

`outcomes`

Array of outcome records.

Each outcome should contain:

1. `statement`.
2. `kind`, such as measured, observed, design target, or qualitative.
3. `source` when the outcome is measured or externally verifiable.

The UI must visually distinguish measured outcomes from design intent.

### Visual Assets

`heroImage`

Primary project visual.

`gallery`

Optional screenshots, diagrams, or generated visual explanations.

Every visual requires meaningful alt text unless it is decorative.

### Case Study Capability Flags

Optional booleans may indicate whether the entry has architecture, database, workflow, testing, reliability, security, performance, or lessons sections.

These flags may be derived from content rather than duplicated if the implementation makes that reliable.

## Case Study Body

Use Markdown or MDX body content for the narrative that does not belong in structured frontmatter.

Recommended headings:

1. Problem.
2. Context and constraints.
3. System design.
4. Key decisions.
5. Implementation.
6. Reliability and quality.
7. Outcome.
8. Limitations and next work.

Use only the headings that have evidence.

## Validation Rules

1. Flagship entries require at least one evidence record.
2. Flagship entries require a problem statement and role.
3. Public source visibility requires a repository link.
4. A measured outcome requires a source.
5. A project cannot be marked production solely from design intent.
6. A project with private source must expose at least one publishable evidence artifact before it can be flagship in production.
7. Empty links are invalid. Omit unavailable links instead.
8. Placeholder TODO strings are invalid in production content.
9. `featuredRank` values must be unique among visible flagship entries.
10. Every gallery item must include alt text or an explicit decorative flag.

## Initial Project Mapping

### SmallBizzWizz

Tier: flagship.

Visibility: public source.

Primary themes: systems, data, applied AI, reliability.

### CMS Rescue

Tier: flagship.

Visibility: private source with publishable evidence.

Primary themes: reliability, automation, data, platform integration, safety.

### Craft Product Publisher

Tier: flagship.

Visibility: private source with publishable evidence.

Primary themes: automation, commerce, image processing, safety, workflow design.

### Prime Lab

Tier: lab.

Visibility: public source.

Primary themes: mathematics, visualization, experimentation.

### Phase

Tier: lab.

Visibility: public source.

Primary themes: procedural computing, mathematics, graphics, audio.

## Skills Presentation

Do not maintain a separate unverified global skills inventory as the primary proof mechanism.

Derive project technology badges from project entries and maintain a small curated capability summary separately for recruiter scanning.

The strongest skill claim is repeated evidence across projects, not a long keyword list.
