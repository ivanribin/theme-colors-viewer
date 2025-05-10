import type { ReactElement } from "react"
import "./style.css"

export const ServiceHeader =():ReactElement => {
    return (
        <div className="services-header">
            <span className="services-subtitle">SERVICES</span>
            <h2 className="services-title">Architecture is not simply a service, it is also an inspiration</h2>
        </div>
    );
};