import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mojo4sho1.github.io",
  base: "/josephcaldwell.com",
  output: "static",
  integrations: [mdx()],
});
