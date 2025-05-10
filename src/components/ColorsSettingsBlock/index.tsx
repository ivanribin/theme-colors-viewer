import ColorInput from "@components/ColorInput";
import { type IColorData } from "@domains/ThemeColorsRoot";
import { type ReactElement } from "react";
import "./style.css";
import CopyableLabel from "@components/CopyableLabel";

export interface IColorsSettingsBlockProps {
    colorData: IColorData;
}

const ColorsSettingsBlock = ({
    colorData,
}: IColorsSettingsBlockProps): ReactElement => {
    return (
        <div className="colors-settings-block">
            <div className="title">
                {`${colorData.label} - `}
                <CopyableLabel label={colorData.value} />
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
