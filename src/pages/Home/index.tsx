import IconButton from "@components/IconButton";
import ColorTestComponent from "@components/ColorTestComponent";
import { NAVIGATION_ICON_SIZE, SpriteIconsIds } from "@utils/constants";
import { useNavigate } from "react-router";
import { type ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const HomePage = (): ReactElement => {
    const navigate = useNavigate();

    const navigateToColorsSetting = (): void => {
        navigate(paths.COLORS_SETTINGS.path);
    }

    return (
        <div className="home-page">
            <div className="navigation-button">
                <IconButton iconId={SpriteIconsIds.PALETTE_ICON} onClick={navigateToColorsSetting} width={NAVIGATION_ICON_SIZE} height={NAVIGATION_ICON_SIZE}/>
            </div>
            <ColorTestComponent />
        </div>
    )
};

export default HomePage;
