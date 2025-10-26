const specRegex = /v\d+\.\d+\.\d+/;

export const inferSpecVersionFromPath = (path: string): string => {
    const parts = path.split("/").filter(Boolean);
    const matches = specRegex.exec(parts[parts.length - 1]);
    if (!matches) {
        return "";
    }

    return matches[0];
};
