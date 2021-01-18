
import React, { useEffect, useState, useReducer, useMemo } from 'react';

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
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // const filteredUsers = characters.filter(user => {
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    const filteredUsers = useMemo(() => characters.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase())
    }), [characters, search])


    return (
        <div className="Characters">
            <ul>
                {favorites.favorites.map(favorite =>
                    <li>{favorite.name}</li>
                )}
            </ul>

            <div>
                <input type="text"
                    value={search} onChange={handleSearch}></input>
            </div>

            {filteredUsers.map(character => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <button onClick={() => handleClick(character)}>Add to favorites </button>
                </div>
            ))}

        </div>
    )


}

export default Example8;