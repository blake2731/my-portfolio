import { describe, expect, it } from "vitest";

import { findFeaturedRankCollisions } from "../src/lib/projectRules";

describe("findFeaturedRankCollisions", () => {
  it("accepts unique flagship ranks", () => {
    expect(
      findFeaturedRankCollisions([
        { title: "One", tier: "flagship", featuredRank: 1 },
        { title: "Two", tier: "flagship", featuredRank: 2 },
        { title: "Lab", tier: "lab" },
      ]),
    ).toEqual([]);
  });

  it("reports duplicate flagship ranks", () => {
    expect(
      findFeaturedRankCollisions([
        { title: "One", tier: "flagship", featuredRank: 1 },
        { title: "Two", tier: "flagship", featuredRank: 1 },
      ]),
    ).toEqual(["Featured rank 1 is assigned to both One and Two."]);
  });
});
