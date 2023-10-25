import React, { useState } from "react";
import Descripcion from "../atoms/Descripcion";

const PokemonThumbnail = ({
    id,
    name,
    image,
    type,
    height,
    weigth,
    prop1,
    prop2,
    prop3,
    prop4,
    prop5,
    prop6,
    prop7
}) => {

    const style = `thumb-container ${type}`;

    const [show, setShow] = useState(false);

    return(
        <>
            <div>
                <small>#0{id}</small>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>{name.toUpperCase()}</h3>
                <h3><small>Tipo: {type}</small></h3>
                <button className="pokeinfo" onClick={() => setShow(!show)}>
                    {show === true? "Cerrar": "Abrir"}

                </button>
                {
                    show === true ? (
                        <Descripcion 
                            height={height}
                            weigth={weigth}
                            prop2={prop1}
                            prop3={prop2}
                            prop4={prop3}
                            prop5={prop4}
                            prop6={prop5}
                            prop7={prop6}
                            prop8={prop7}
                        />
                    )
                    :
                    ( <></> )
                }
            </div>
        </>
    );

}

export default PokemonThumbnail;