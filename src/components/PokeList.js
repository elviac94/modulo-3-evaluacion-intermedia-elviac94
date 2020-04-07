import React from 'react';
import Pokemon from './Pokemon';

const PokeList=(props)=>{
    return(
        <ul>
            {props.dataList.map((pokeObject,index)=>
            <Pokemon
            key={index}
            image={pokeObject.url}
            name ={pokeObject.name}
            types={pokeObject.types}/>)}
        </ul>
    )
}
export default PokeList;