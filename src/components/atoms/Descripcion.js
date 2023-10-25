import React  from "react";


const Descripcion = ({name, height, weight, hp, attack, defense, special_attack, special_defense, speed}) => {
    return (
        <div className="desc">
            <p><b>Altura: {height * 10}</b></p>
            <p><b>peso: {weight / 0.1 }</b></p>
            
            <p><b>Stats:</b></p>
            
            <p><b>HP: {hp}</b></p>
            <p><b>Ataque: {attack}</b></p>
            <p><b>Defensa: {defense}</b></p>
            <p><b>Ataque especial: {special_attack}</b></p>
            <p><b>Defensa especial: {special_defense}</b></p>
            <p><b>Velocidad: {speed}</b></p>
        </div>
    );
}

export default Descripcion;
