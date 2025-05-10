
import { ServiceHeader } from "@components/ServiceHeader"
import "./style.css"
import { ServiceGrid } from "@components/ServiceGrid"
import { ServiceButton } from "@components/ServiceButton"
import type { ReactElement } from "react"

export const ServiceSection = (): ReactElement => {
    return (
        <div className="service-section">
            <ServiceHeader />
            <ServiceGrid />
            <ServiceButton />
        </div>
    );
};