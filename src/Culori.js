import React from "react";

const Culori = (props) => {
    const { culoare, schimbaCuloarea } = props.contextValue;
    const culori = ["Rosu", "Galben", "Albastru", "Roz-bonbon"];

    return (
        <props.context.Provider>
            <div>
                <h2>Culoarea mea preferata e {culoare}</h2>
                {culori.map((color, key) => (
                    <label key={key}>
                        <input
                            type="radio"
                            name="culoare"
                            value={color.toLowerCase()}
                            onChange={schimbaCuloarea}
                            checked={culoare === color.toLowerCase()}
                        />
                        {color}
                    </label>
                ))}
            </div>
        </props.context.Provider>
    );
};

export default Culori;
