
import type { ReactElement } from "react";
import Home from "@assets/images/Home.svg";
import "./style.css";

export const Header = (): ReactElement => {
    return (
        <header className="header">
            <div className="header__img-container">
                <img src={Home} alt="Header" className="header__image" />
            </div>

            <div className="header__content">
                <div className="header__text-container">
                    <p className="header__small-text">VINTAGE STUDIO</p>
                    <h1 className="header__main-text">Your Vision, Our Expertise!</h1>
                    <p className="header__description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel egestas fringilla.
                    </p>
                    <div className="header__buttons">
                        <button className="header__btn-secondary">EXPLORE</button>
                        <button className="header__btn-primary primary">LET'S CHAT</button>
                    </div>
                </div>
            </div>
    </header>
  );
};