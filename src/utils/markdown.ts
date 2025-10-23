import type { MarkdownHeading } from "astro";

export interface HeadingNode extends MarkdownHeading {
	children: HeadingNode[];
}

type BuildHeadingTreeOptions = {
	// Skips headings with the depth of 1 (ie. <h1>)
	skipDepthOne?: boolean;
};

export const buildHeadingTree = (
	headings: MarkdownHeading[],
	opts?: BuildHeadingTreeOptions
): HeadingNode[] => {
	const nodes: HeadingNode[] = [];

	const parentHeadings = new Map<number, HeadingNode>();
	for (const heading of headings) {
		if (opts?.skipDepthOne && heading.depth === 1) {
			continue;
		}

		const node: HeadingNode = { ...heading, children: [] };
		parentHeadings.set(node.depth, node);

		if (heading.depth === 2) {
			nodes.push(node);
			continue;
		}

		const parent = parentHeadings.get(node.depth - 1);
		if (parent) {
			parent.children.push(node);
		} else {
			nodes.push(node);
		}
	}

	return nodes;
};
