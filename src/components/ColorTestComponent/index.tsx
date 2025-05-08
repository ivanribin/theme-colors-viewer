import { type ReactElement } from "react";

const ColorTestComponent = (): ReactElement => {
    return (
        <div className="theme-test-container">
            <h2>Theme Color & Button Test</h2>

            <div className="color-swatches">
                <div className="swatch bg-primary">.bg-primary</div>
                <div className="swatch bg-secondary">.bg-secondary</div>
                <div className="swatch bg-tertiary">.bg-tertiary</div>
                <div className="swatch bg-neutral-100">.bg-neutral-100</div>
                <div className="swatch bg-neutral-200">.bg-neutral-200</div>
                <div className="swatch bg-neutral-500">.bg-neutral-500</div>
                <div className="swatch bg-neutral-800">.bg-neutral-800</div>
                <div className="swatch bg-neutral-900">.bg-neutral-900</div>
            </div>

            <h3>Buttons</h3>
            <div className="button-row">
                <button className="primary">Primary</button>
                <button className="secondary">Secondary</button>
                <button className="outlined">Outlined</button>
                <button className="primary" disabled>
                    Disabled
                </button>
            </div>
        </div>
    );
};

export default ColorTestComponent;
