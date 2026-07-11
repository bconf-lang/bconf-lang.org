const specRegex = /v\d+\.\d+\.\d+/;

export const inferSpecVersionFromPath = (path: string): string => {
    const parts = path.split("/");
    const matches = specRegex.exec(parts[parts.length - 1]);
    if (!matches) {
        return "";
    }

    // Stripping `v` to return the actual version
    return matches[0].substring(1);
};

export function sortSpecsDescending(specs: string[]): string[] {
    return specs.toSorted((v1, v2) => {
        const [main1, pre1] = v1.split("-");
        const [main2, pre2] = v2.split("-");

        const parts1 = main1.split(".").map(Number);
        const parts2 = main2.split(".").map(Number);

        // Compare Major, Minor, and Patch
        for (let i = 0; i < 3; i++) {
            const a = parts1[i] ?? 0;
            const b = parts2[i] ?? 0;

            if (a > b) {
                return -1;
            }

            if (a < b) {
                return 1;
            }
        }

        // If main versions are identical, evaluate pre-release tags.
        // A version WITH a pre-release tag is lower than a version WITHOUT one.
        if (pre1 && !pre2) {
            return -1;
        }

        if (!pre1 && pre2) {
            return 1;
        }

        // If both have pre-release tags, perform a standard string comparison
        if (pre1 && pre2) {
            if (pre1 === pre2) {
                return 0;
            }

            return pre1 > pre2 ? 1 : -1;
        }

        return 0;
    });
}

export function getLatestSpec(specs: string[]): string {
    return sortSpecsDescending(specs)[0];
}
