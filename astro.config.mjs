// @ts-check
import { defineConfig } from "astro/config";
import bconfTmLang from "./public/bconf.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "monokai",
			langs: [bconfTmLang],
		},
	},
});
