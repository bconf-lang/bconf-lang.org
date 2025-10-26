export function rehypeSelfLinkHeadings() {
    function walk(node) {
        if (!node || typeof node !== "object") return;

        // Only process elements
        if (node.type === "element" && /^h[1-6]$/.test(node.tagName)) {
            const id = node.properties?.id;
            if (id) {
                node.children = [
                    {
                        type: "element",
                        tagName: "a",
                        properties: { href: `#${id}` },
                        children: node.children,
                    },
                ];
            }
        }

        // Recurse into children
        if (Array.isArray(node.children)) {
            node.children.forEach(walk);
        }
    }

    return (tree) => walk(tree);
}
