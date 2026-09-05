import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/li-lab-website/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        research: resolve(__dirname, "research.html"),
        publications: resolve(__dirname, "publications.html"),
        people: resolve(__dirname, "people.html"),
        news: resolve(__dirname, "news.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
