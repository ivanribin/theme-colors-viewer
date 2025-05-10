import type { ReactElement } from "react";
import "./style.css"

const stats = [
    {value:"500K", label: "PROJECTS"},
    {value:"575K", label: "SKETCHES"},
    {value:"250K", label: "CLIENTS"},
    {value:"365K", label: "LIKES"},
    {value:"500K", label: "AWARDS"}
];

export const StatsInfo = ():ReactElement => {
    return (
     
            <div className="stats-section">
                {stats.map((stat,index)=>(
                    <div key = {index} className="stat-card">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
      
    );
};