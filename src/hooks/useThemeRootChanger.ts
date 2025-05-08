import {
    type IRootFieldData,
    type TThemeColorsRoot,
} from "@domains/ThemeColorsRoot";
import { defaultThemeRoot } from "@utils/constants";
import { useEffect, useState } from "react";

const useThemeRootChanger = () => {
    const [themeRoot, setThemeRoot] =
        useState<TThemeColorsRoot>(defaultThemeRoot);

    const updateThemeRoot = (newRoot: TThemeColorsRoot): void => {
        const root = document.documentElement;

        newRoot.forEach((colorData) => {
            root.style.setProperty(colorData.id, colorData.value);
        });
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
