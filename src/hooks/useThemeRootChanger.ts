import { useEffect, useState } from "react";
import {
    getInitialThemeColorsRoot,
    THEME_COLORS_ROOT_LOCAL_STORAGE_KEY,
} from "@utils/constants";
import {
    type IRootFieldData,
    type TThemeColorsRoot,
} from "@domains/ThemeColorsRoot";

const useThemeRootChanger = () => {
    const [themeRoot, setThemeRoot] = useState<TThemeColorsRoot>(
        getInitialThemeColorsRoot()
    );

    const updateThemeRoot = (newRoot: TThemeColorsRoot): void => {
        const root = document.documentElement;

        newRoot.forEach((colorData) => {
            root.style.setProperty(colorData.id, colorData.value);
        });

        localStorage.setItem(
            THEME_COLORS_ROOT_LOCAL_STORAGE_KEY,
            JSON.stringify(newRoot)
        );
    };

    const updateThemeRootField = (rootFieldData: IRootFieldData): void => {
        const root = document.documentElement;

        root.style.setProperty(rootFieldData.id, rootFieldData.value);

        setThemeRoot((prevRoot) => {
            const updatedRoot = [...prevRoot];

            const updatedFieldIndex = updatedRoot.findIndex(
                (fieldData) => fieldData.id === rootFieldData.id
            );

            if (updatedFieldIndex === -1) {
                console.error(
                    "You used incorrect color inputs in theme root setting"
                );

                return updatedRoot;
            }

            updatedRoot[updatedFieldIndex].value = rootFieldData.value;

            return updatedRoot;
        });

        localStorage.setItem(
            THEME_COLORS_ROOT_LOCAL_STORAGE_KEY,
            JSON.stringify(themeRoot)
        );
    };

    useEffect(() => {
        updateThemeRoot(themeRoot);
    }, []);

    return {
        themeRoot,
        updateThemeRootField,
    };
};

export default useThemeRootChanger;
