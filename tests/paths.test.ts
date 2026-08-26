import { describe, expect, it } from "vitest";

import { joinBase } from "../src/utils/paths";

describe("joinBase", () => {
  it("joins a root base without duplicating slashes", () => {
    expect(joinBase("/", "/work/")).toBe("/work/");
  });

  it("joins a GitHub Pages repository base", () => {
    expect(joinBase("/my-portfolio/", "/work/smallbizzwizz/")).toBe(
      "/my-portfolio/work/smallbizzwizz/",
    );
  });

  it("normalizes a base that does not end in a slash", () => {
    expect(joinBase("/my-portfolio", "lab/")).toBe("/my-portfolio/lab/");
  });
});
