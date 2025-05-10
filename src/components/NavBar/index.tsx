import type { ReactElement } from "react";
import vintage from "@assets/images/vintage.svg";
import "./style.css";
import { useNavigate } from "react-router";

export const NavBar = (): ReactElement => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="navbar__logo-container">
                <img src={vintage} alt="Logo" className="navbar__logo" />
            </div>

            <div className="navbar__text">Architecture Made With ❤️</div>

            <div className="navbar__buttons">
                <button className="navbar__button outlined">HOME</button>
                <button className="navbar__button outlined">ABOUT</button>
                <button
                    className="navbar__button outlined"
                    onClick={() => navigate("/settings/colors")}
                >
                    SERVICES
                </button>
                <button className="navbar__button outlined">PROJECTS</button>
                <button className="navbar__button outlined">NEWS</button>
                <button className="navbar__button outlined">CONTACT</button>
            </div>
        </div>
    );
};
