import type { ReactElement } from "react";
import "./style.css";
import { AboutInfo } from "@components/AboutSection";
import { StatsInfo } from "@components/StatsSection";

export const MainIfo = (): ReactElement => {
    return (
        <div className="main-content">
            <AboutInfo />
            <StatsInfo />
        </div>
    );
};
