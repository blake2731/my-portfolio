# Portfolio V2 Information Architecture

Status: Approved for implementation planning.

## Principle

The site should reveal increasing technical depth as the visitor chooses to go deeper.

The homepage is not the case study. It is the routing layer that establishes identity, credibility, and the strongest evidence quickly.

## Primary Navigation

1. Work.
2. About.
3. Lab.
4. Resume.
5. Contact.

Keep navigation intentionally small. Do not create a separate top level page for every technology or skill category.

## Route Model

### `/`

Purpose: fast orientation and flagship proof.

Required sections:

1. Identity and positioning hero.
2. Compact credibility strip.
3. Three flagship project entries ordered by current evidence value.
4. Engineering principles or problem solving pattern.
5. Supporting experiments from Lab.
6. About preview.
7. Contact call to action.

The homepage must not embed an entire flagship case study as the current site does.

### `/work/`

Purpose: complete curated project index.

Each entry should expose problem, role, proof status, key stack, and the strongest outcome or engineering signal.

Allow filtering only if it improves navigation after enough projects exist. Do not add filtering as decoration.

### `/work/[slug]/`

Purpose: reusable deep case study route.

Case study progression:

1. Project thesis.
2. Problem and context.
3. Role and constraints.
4. System overview.
5. Important decisions.
6. Engineering implementation.
7. Reliability, testing, or safety evidence.
8. Product screens or visual proof.
9. Outcomes and limitations.
10. What changed or what was learned.
11. Repository, live product, Marketplace, or other available proof links.

Not every project must render every section. The content schema should make optional evidence explicit rather than fill absent sections with marketing copy.

### `/lab/`

Purpose: show curiosity and technical range without diluting the production engineering story.

Initial candidates:

1. Prime Lab.
2. Phase.
3. Future experiments with enough working evidence to be worth showing.

Lab entries can emphasize experimentation, mathematical ideas, procedural systems, visualization, and learning.

### `/about/`

Purpose: explain the professional through line behind the work.

Focus on how operations, customer facing experience, computer science, business automation, AI evaluation, and independent engineering contribute to practical product judgment.

Avoid turning this route into a biography timeline with little hiring value.

### `/resume/`

Purpose: recruiter utility.

Provide a clean web summary and a stable resume download path when the approved resume artifact is added.

### `/contact/`

Purpose: low friction contact.

Use direct trusted contact paths. A custom form should be added only if its delivery reliability can be tested and maintained.

## Homepage Flagship Logic

Initial order for content planning:

1. SmallBizzWizz.
2. CMS Rescue.
3. Craft Product Publisher.

The presentation should deliberately differentiate why each matters.

SmallBizzWizz proves full stack system breadth and production maintenance.

CMS Rescue proves deterministic safety, migration recovery, product judgment, and Framer platform integration.

Craft Product Publisher proves business workflow automation, desktop engineering, image processing, validation, and controlled publishing design.

The Portfolio Platform becomes a case study after V2 has enough measured implementation evidence to deserve one.

## Supporting Proof Strategy

Prime Lab and Phase should appear as deliberate signals of curiosity and originality, not as equal weight production products.

Application Security Research should not remain a generic project card without concrete public artifacts. Security thinking should instead appear where it is evidenced in real projects, unless a dedicated body of security work becomes publishable.

## Progressive Disclosure

Level 1: headline, project title, problem, strongest proof signal.

Level 2: project card or work index with role, stack, system summary, and evidence links.

Level 3: full case study with architecture, decisions, failures, safeguards, testing, and outcomes.

Level 4: source repository, live application, Marketplace listing, technical report, or other direct proof where available.

## Content Hierarchy Rule

Do not rank projects by how much prose already exists for them. Rank them by verified engineering value and give each the amount of interface space its evidence justifies.
