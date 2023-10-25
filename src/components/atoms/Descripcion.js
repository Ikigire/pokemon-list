import React  from "react";


const Descripcion = ({name, height, weigth, prop2, prop3, prop4, prop5, prop6, prop7, prop8}) => {
    return (
        <div className="desc">
            <p><b>Altura: {height * 10}</b></p>
            <p><b>peso: {weigth * 0.1}</b></p>
            
            <p><b>Stats:</b></p>
            
            <p><b>HP: {prop2}</b></p>
            <p><b>Ataque: {prop3}</b></p>
            <p><b>Ataque especial: {prop4}</b></p>
            <p><b>Defensa especial: {prop5}</b></p>
            <p><b>Velocidad: {prop6}</b></p>
            <p><b>Ataque: {prop7}</b></p>
        </div>
    );
}

export default Descripcion;
