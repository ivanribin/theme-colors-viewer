import { type TThemeColorsRoot } from "@domains/ThemeColorsRoot";

export const defaultThemeRoot: TThemeColorsRoot = [
    { id: "--color-primary", label: "primary", value: "#0066ff" },
    { id: "--color-secondary", label: "secondary", value: "#00c896" },
    { id: "--color-tertiary", label: "tertiary", value: "#ff8c00" },
    { id: "--color-neutral-100", label: "neutral 100", value: "#fffff" },
    { id: "--color-neutral-200", label: "neutral 200", value: "#f5f5f5" },
    { id: "--color-neutral-500", label: "neutral 500", value: "#999999" },
    { id: "--color-neutral-800", label: "neutral 800", value: "#333333" },
    { id: "--color-neutral-900", label: "neutral 900", value: "#000000" },
];

export const THEME_COLORS_ROOT_LOCAL_STORAGE_KEY: string = "themeColorsRoot";

export const enum SpriteIconsIds {
    PALETTE_ICON = "palette-icon",
    PICTURE_ICON = "picture-icon",
    COPY_ICON = "copy-icon",
}

export const NAVIGATION_ICON_SIZE: string = "50px";

export const getInitialThemeColorsRoot = (): TThemeColorsRoot => {
    const savedRoot = localStorage.getItem(THEME_COLORS_ROOT_LOCAL_STORAGE_KEY);

    return !savedRoot ? defaultThemeRoot : JSON.parse(savedRoot);
};
