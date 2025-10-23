// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { setDefaultShellLayout } from "./plugins/remark/defaultLayout";
import bconfTmLang from "./public/bconf.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
	output: "static",
	markdown: {
		remarkPlugins: [setDefaultShellLayout],
		shikiConfig: {
			theme: "monokai",
			langs: [bconfTmLang],
		},
	},
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
