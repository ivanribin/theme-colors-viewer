import copyIcon from "@assets/images/copyIcon.svg";
import { type ReactElement } from "react";
import "./style.css";

export interface ICopyableLabelProps {
    label: string;
}

const CopyableLabel = ({ label }: ICopyableLabelProps): ReactElement => {
    const handleClick = (): void => {
        navigator.clipboard.writeText(label);
    };

    return (
        <div className="copyable-label" onClick={handleClick}>
            <img src={copyIcon} alt="fd" />
            {label}
        </div>
    );
};

export default CopyableLabel;
