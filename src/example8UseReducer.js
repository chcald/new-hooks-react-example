
import React, { useEffect, useState, useReducer } from 'react';

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

const Example8 = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    return (
        <div className="Characters">
            <ul>
                {favorites.favorites.map(favorite =>
                    <li>{favorite.name}</li>
                )}
            </ul>

            {characters.map(character => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <button onClick={() => handleClick(character)}>Add to favorites </button>
                </div>
            ))}

        </div>
    )


}

export default Example8;