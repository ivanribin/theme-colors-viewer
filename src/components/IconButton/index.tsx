import SpriteIcon from "@components/SpriteIcon";
import { type ReactElement } from "react";
import "./style.css";

export interface IIconButtonProps {
    iconId: string;
    onClick: () => void;
    width?: string;
    height?: string;
}

const IconButton = ({
    iconId,
    onClick,
    width,
    height,
}: IIconButtonProps): ReactElement => {
    return (
        <button className="icon-button" onClick={onClick}>
            <SpriteIcon iconId={iconId} width={width} height={height} />
        </button>
    );
};

export default IconButton;
