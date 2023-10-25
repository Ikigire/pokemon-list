import React, { useState } from "react";
import Descripcion from "../atoms/Descripcion";

const PokemonThumbnail = ({
    id,
    name,
    image,
    type,
    height,
    weight,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed,
    
}) => {

    const style = `thumb-container ${type}`;

    const [show, setShow] = useState(false);

    return(
        <>
            <div className={style}>
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
                            weight={weight}
                            hp={hp}
                            attack={attack}
                            defense={defense}
                            special_attack={special_attack}
                            special_defense={special_defense}
                            speed={speed}
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