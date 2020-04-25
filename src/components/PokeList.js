import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

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
};

PokeList.propTypes = {
    dataList: PropTypes.array,
    image: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
}

export default PokeList;