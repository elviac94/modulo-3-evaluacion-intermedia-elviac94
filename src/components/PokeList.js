import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
    return (
        <ul className="pokelist__container">
            {props.dataList.map((pokeObject) =>
                <li className="pokemons___container" key={pokeObject.id}>
                    <Pokemon
                        image={pokeObject.url}
                        name={pokeObject.name}
                        types={pokeObject.types} />
                </li>
            )}
        </ul>
    )
}
export default PokeList;