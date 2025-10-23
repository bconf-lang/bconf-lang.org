export const setDefaultShellLayout = () => {
    return (_, file) => {
        if (file.path.includes("/specs/")) {
            file.data.astro.frontmatter.layout = file.data.astro.frontmatter.layout || "@layouts/SpecShell.astro";
        }
    };
};
