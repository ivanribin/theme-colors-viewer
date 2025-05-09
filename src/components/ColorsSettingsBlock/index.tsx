import IconButton from "@components/IconButton";
import ColorInput from "@components/ColorInput";
import { type IColorData } from "@domains/ThemeColorsRoot";
import { SpriteIconsIds } from "@utils/constants";
import { type ReactElement } from "react";
import "./style.css";

export interface IColorsSettingsBlockProps {
    colorData: IColorData;
}

const ColorsSettingsBlock = ({
    colorData,
}: IColorsSettingsBlockProps): ReactElement => {
    const copyLabelToClipboard = (): void => {
        navigator.clipboard.writeText(colorData.value);
    };

    return (
        <div className="colors-settings-block">
            <div className="title">
                {`${colorData.label} - ${colorData.value}`}
                <IconButton iconId={SpriteIconsIds.COPY_ICON} onClick={copyLabelToClipboard}/>
            </div>
            <ColorInput
                key={colorData.id}
                initialValue={colorData.value}
                name={colorData.id}
            />
        </div>
    );
};

export default ColorsSettingsBlock;
