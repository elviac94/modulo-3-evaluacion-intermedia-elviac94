import React from 'react';

const Pokemon = (props) => {
    return (
        <li className="pokemons___container">
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <ul>{props.types.map((singleType, index) =>
                <li key={index}>
                    {singleType}
                </li>)}
            </ul>

        </li>
    )
}
export default Pokemon;