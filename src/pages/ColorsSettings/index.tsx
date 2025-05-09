import IconButton from "@components/IconButton";
import useThemeRootChanger from "@hooks/useThemeRootChanger";
import ColorsSettingsBlock from "@components/ColorsSettingsBlock";
import { NAVIGATION_ICON_SIZE, SpriteIconsIds } from "@utils/constants";
import { type ChangeEvent, type ReactElement } from "react";
import { useNavigate } from "react-router";
import { paths } from "@router/routes";
import "./style.css";

const ColorsSettingsPage = (): ReactElement => {
    const navigate = useNavigate();

    const { themeRoot, updateThemeRootField } = useThemeRootChanger();

    const navigateToHome = (): void => {
        navigate(paths.HOME.path);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const targetInput = event.target as HTMLInputElement;

        updateThemeRootField({
            id: targetInput.name,
            value: targetInput.value,
        });
    };

    return (
        <div className="colors-settings-page" onChange={handleChange}>
            <div className="navigation-button">
                <IconButton
                    iconId={SpriteIconsIds.PICTURE_ICON}
                    onClick={navigateToHome}
                    width={NAVIGATION_ICON_SIZE}
                    height={NAVIGATION_ICON_SIZE}
                />
            </div>
            {themeRoot.map((colorData) => (
                <ColorsSettingsBlock key={colorData.id} colorData={colorData} />
            ))}
        </div>
    );
};

export default ColorsSettingsPage;
