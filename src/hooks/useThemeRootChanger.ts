export interface IThemeColorsRoot {
    primary: string;
    secondary: string;
    tertiary: string;
    neutral100: string;
    neutral200: string;
    neutral500: string;
    neutral800: string;
    neutral900: string;
}

export const themeColorsRootIdsList: string[] = [
    "--color-primary",
    "--color-secondary",
    "--color-tertiary",
    "--color-neutral-100",
    "--color-neutral-200",
    "--color-neutral-500",
    "--color-neutral-800",
    "--color-neutral-900",
];

const useThemeRootChanger = () => {
    const updateThemeRoot = (newRoot: IThemeColorsRoot): void => {
        const root = document.documentElement;

        const newRootList = Object.values(newRoot);

        newRootList.forEach((fieldValue, index) => {
            root.style.setProperty(themeColorsRootIdsList[index], fieldValue);
        });
    };

    return {
        updateThemeRoot,
    };
};

export default useThemeRootChanger;
