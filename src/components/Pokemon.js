import React from 'react';

const Pokemon = (props) => {
    return (
        <div className="poke__container">
            <div className="image__container">
                <img src={props.image} alt={props.name} />
            </div>

            <h1 className="pokemon--name">{props.name}</h1>
            <ul className="pokemon__container--type">{props.types.map((singleType, index) =>
                <li className="pokemon--type" key={index}>
                    {singleType}
                </li>)}
            </ul>

        </div>
    )
}
export default Pokemon;