export const setDefaultLayout = () => {
	return (_, file) => {
		file.data.astro.frontmatter.layout =
			file.data.astro.frontmatter.layout || "@layouts/shell.astro";
	};
};
