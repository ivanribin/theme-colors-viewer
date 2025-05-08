import { useState, type ChangeEvent, type ReactElement } from "react";
import "./style.css";

export interface IColorInputProps {
    initialValue: string;
    name: string;
    onChange?: (newColor: string) => void;
}

const ColorInput = ({
    initialValue,
    name,
    onChange = () => {},
}: IColorInputProps): ReactElement => {
    const [color, setColor] = useState<string>(initialValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange(event.target.value);
        setColor(event.target.value);
    };

    return <input className="color-input" type="color" name={name} value={color} onChange={handleChange} />;
};

export default ColorInput;
