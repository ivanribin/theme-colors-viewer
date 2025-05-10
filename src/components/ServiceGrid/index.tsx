import type { ReactElement } from "react";
import "./style.css"

const services = [
  {
    id: "01",
    title: "Architecture",
    description: "Excepturi sed impedit mollitia dicta rerum vero aut in vel. Sed dolor enim voluptas."
  },
  {
    id: "02",
    title: "Interior Design",
    description: "Excepturi sed impedit mollitia dicta rerum vero aut in vel. Sed dolor enim voluptas."
  },
  {
    id: "03",
    title: "Master Planing",
    description: "Excepturi sed impedit mollitia dicta rerum vero aut in vel. Sed dolor enim voluptas."
  },
  {
    id: "04",
    title: "Construction",
    description: "Excepturi sed impedit mollitia dicta rerum vero aut in vel. Sed dolor enim voluptas."
  },
  {
    id: "05",
    title: "Energy Audit",
    description: "Excepturi sed impedit mollitia dicta rerum vero aut in vel. Sed dolor enim voluptas."
  },
  {
    id: "06",
    title: "Documentation",
    description: "Excepturi sed impedit mollitia dicta rerum vero aut in vel. Sed dolor enim voluptas."
  }
];

export const ServiceGrid =():ReactElement =>{
    return (
        <div className="service-grid">
            {services.map((service)=> (
                <div key = {service.id} className="service-card">
                    <p className="service-number">{service.id}/06</p>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                </div>
            ))}
        </div>
    )
}