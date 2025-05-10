import { type ReactElement } from "react";
import "./style.css";
import { NavBar } from "@components/NavBar";
import { Header } from "@components/Header";
import { MainIfo } from "@components/MainInfo";
import { ServiceSection } from "@components/ServicesSection";

const HomePage = (): ReactElement => {
    return (
        <div className="home-page">
            <NavBar />
            <Header />
            <MainIfo />
            <ServiceSection />
        </div>
    );
};

export default HomePage;
