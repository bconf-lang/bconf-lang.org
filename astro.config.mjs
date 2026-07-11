// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import { rehypeSelfLinkHeadings } from "./plugins/rehype/selfLinkHeadings";
import { setDefaultShellLayout } from "./plugins/remark/defaultLayout";
import bconfTmLang from "./public/bconf.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
    site: "https://bconf-lang.org",
    output: "static",
    trailingSlash: "never",
    markdown: {
        processor: unified({
            rehypePlugins: [rehypeHeadingIds, rehypeSelfLinkHeadings],
            remarkPlugins: [setDefaultShellLayout],
        }),
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
            redirectToDefaultLocale: false,
        },
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
