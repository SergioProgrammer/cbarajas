import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // si usas React

export default defineConfig({
  integrations: [react(), tailwind()],
});
