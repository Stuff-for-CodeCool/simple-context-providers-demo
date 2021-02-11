import React, { StrictMode, createContext, useContext, useState } from "react";
import { render } from "react-dom";

import "./index.css";

import Culori from "./Culori";

const GeographiContext = createContext(null);
const AltContext = createContext(null);

const UndeSuntem = () => {
    const { locatie } = useContext(GeographiContext);

    return (
        <div>
            <h1>Ne aflam la {locatie}</h1>
        </div>
    );
};

const CumEAfara = () => {
    const { vreme } = useContext(GeographiContext);

    return (
        <div>
            <h2>Afara e {vreme}</h2>
        </div>
    );
};

const Schimbator = () => {
    const { locatie, vreme, schimbaLocatia, schimbaVremea } = useContext(GeographiContext);

    return (
        <div>
            <p>
                <label>
                    <span>Unde suntem?</span>
                    <select value={locatie} onChange={schimbaLocatia}>
                        <option value="Locatia 1">Locatia 1</option>
                        <option value="Locatia 2">Locatia 2</option>
                        <option value="Locatia 3">Locatia 3</option>
                    </select>
                </label>
            </p>
            <p>
                <label>
                    <span>Cum e?</span>
                    <select value={vreme} onChange={schimbaVremea}>
                        <option value="Vreme 1">Vreme 1</option>
                        <option value="Vreme 2">Vreme 2</option>
                        <option value="Vreme 3">Vreme 3</option>
                    </select>
                </label>
            </p>
        </div>
    );
};

const App = () => {
    const [locatie, setLocatie] = useState("Locatia 1");
    const [vreme, setVreme] = useState("Vreme 1");
    const [culoare, setCuloare] = useState("rosu");

    function schimbaLocatia(evt) {
        setLocatie(evt.target.value);
    }

    function schimbaVremea(evt) {
        setVreme(evt.target.value);
    }

    function schimbaCuloarea(evt) {
        setCuloare(evt.target.value);
    }

    return (
        <StrictMode>
            <GeographiContext.Provider
                value={{ locatie, vreme, schimbaLocatia, schimbaVremea }}
            >
                <Schimbator />
                <UndeSuntem />
                <CumEAfara />
            </GeographiContext.Provider>

            <Culori
                context={AltContext}
                contextValue={{ culoare, schimbaCuloarea }}
            />
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));
