import React from 'react';

const Pokemon = (props) => {
    return (
        <li>
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <h2>{props.types}</h2>
        </li>
    )
}
export default Pokemon;