import React from 'react';

export default function Search({search, searchInput, handleSearch}) {

    return (
        <div>
            <input type="text" ref={searchInput}
                value={search} onChange={handleSearch}></input>
        </div>
    )



}


