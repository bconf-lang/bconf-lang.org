import type { HTMLAttributes } from "astro/types";

export type IconProps = HTMLAttributes<"svg"> & {
    // The size to be applied to both the width and height attributes. If specified,
    // this will always take precedence over the width and height attributes.
    //
    // If `off` width and height values will be ignored. This is useful if you want
    // to control the size of the icon through classes instead without having the
    // width and height attribute interfere
    size?: ({} & string) | number | "off";
};

const DEFAULT_ICON_SIZE = 24;

export const enhanceIconProps = (props: IconProps): IconProps => {
    const { width, height, size } = props;

    props["stroke-width"] ??= 1.5;
    props.color ??= "currentColor";

    if (size === "off") {
        props.width = undefined;
        props.height = undefined;
    } else {
        props.width ??= size ?? width ?? DEFAULT_ICON_SIZE;
        props.height ??= size ?? height ?? DEFAULT_ICON_SIZE;
    }

    return props;
};
