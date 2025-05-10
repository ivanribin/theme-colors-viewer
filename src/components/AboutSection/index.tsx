import type { ReactElement } from "react"
import "./style.css"

export const AboutInfo = () :ReactElement =>{
    return (
        <div className="about-section">
            <div className="about-left">
                <p className="about-label">ABOUT US</p>
                <h2 className="about-title">It’s our job to make your home feel like it belongs to you</h2>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, libero vel egestas fringilla, purus sit amet ante vel odio condimentum tortor.</p>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a risus ac mauris cursus tempor at sit amet orci. Suspendisse vel laoreet mauris. Donec sit amet ante vel odio condimentum lobortis in nec ex. Curabitur varius iaculis vehicula. Vestibulum quis venenatis lorem at, suscipit vel mauris purus.</p>
            </div>

            <div className="about-right">
                <div className="news-item">
                    <p className="news-date">NEWS - MAR 1, 2022</p>
                    <h3 className="news-title">Incidunt eveniet lorem adipisci quod est quaerat</h3>
                </div>
                <div className="news-item">
                    <p className="news-date">NEWS - MAR 1, 2022</p>
                    <h3 className="news-title">Excepturi nulla lorem quam velit error qui dolor</h3>
                </div>
            </div>
        </div>
    )
}