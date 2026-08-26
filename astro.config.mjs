import { defineConfig } from "astro/config";

const site = process.env.PORTFOLIO_SITE ?? "http://localhost:4321";
const base = process.env.PORTFOLIO_BASE || undefined;

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
});
