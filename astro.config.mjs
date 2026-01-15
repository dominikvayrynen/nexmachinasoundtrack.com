import { defineConfig } from "astro/config";
// Import /static for a static site
import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://nexmachina.aritunes.com",

  // Must be 'static' or 'hybrid'
  output: "static",
  adapter: vercelStatic(),
});
