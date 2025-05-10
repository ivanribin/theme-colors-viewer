import useThemeRootChanger from "@hooks/useThemeRootChanger";
import ColorsSettingsBlock from "@components/ColorsSettingsBlock";
import { type ChangeEvent, type ReactElement } from "react";
import "./style.css";
import { useNavigate } from "react-router";


const ColorsSettingsPage = (): ReactElement => {
    const { themeRoot, updateThemeRootField } = useThemeRootChanger();

    const navigate = useNavigate()
  

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        console.log("SETTINGS CHANGE");

        const targetInput = event.target as HTMLInputElement;

        updateThemeRootField({
            id: targetInput.name,
            value: targetInput.value,
        });
    };

    return (
        <div className="colors-settings-page" onChange={handleChange}>
            {themeRoot.map((colorData) => (
                <ColorsSettingsBlock key={colorData.id} colorData={colorData} />
            ))}

            <button className="back-btn" onClick={()=>navigate("/")}>На главную</button>
        </div>
    );
};

export default ColorsSettingsPage;
