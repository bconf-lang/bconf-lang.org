export function rehypeSelfLinkHeadings() {
    function walk(node) {
        if (!node || typeof node !== "object") return;

        // Only process elements
        if (node.type === "element" && /^h[1-6]$/.test(node.tagName)) {
            const id = node.properties?.id;
            if (id) {
                node.children = [
                    ...node.children,
                    {
                        type: "element",
                        tagName: "a",
                        properties: { href: `#${id}` },
                        children: [
                            {
                                type: "element",
                                tagName: "svg",
                                properties: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": 2,
                                    stroke: "currentColor",
                                    fill: "none",
                                },
                                children: [
                                    {
                                        type: "element",
                                        tagName: "path",
                                        properties: {
                                            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                                        },
                                    },
                                    {
                                        type: "element",
                                        tagName: "path",
                                        properties: {
                                            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                                        },
                                    },
                                ],
                            },
                        ],
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
