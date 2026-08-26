export interface RankedProject {
  title: string;
  tier: "flagship" | "supporting" | "lab";
  featuredRank?: number;
}

export function findFeaturedRankCollisions(projects: RankedProject[]): string[] {
  const ranks = new Map<number, string>();
  const errors: string[] = [];

  for (const project of projects) {
    if (project.tier !== "flagship" || project.featuredRank === undefined) continue;

    const existing = ranks.get(project.featuredRank);
    if (existing) {
      errors.push(
        `Featured rank ${project.featuredRank} is assigned to both ${existing} and ${project.title}.`,
      );
      continue;
    }

    ranks.set(project.featuredRank, project.title);
  }

  return errors;
}
