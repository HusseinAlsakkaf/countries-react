
import React from 'react';
import countriesAll from './countriesAll';
const Search = ({updateSearch, handleSearchInput, searchInput}) => {  
    return (
        <div className = 'SearchBar'>
            <input 
                type = 'text'
                value = {searchInput}
                id="CountryName"
                className="form-control"
                placeholder="Search Country"
                onChange={(event) => handleSearchInput(event)}
            />
        </div>
    )
}
export default Search;




/* import React,{useState} from 'react';

const Search = ({updateSearch, handleSearchInput, searchInput}) => {  

   
    return (
        <div>
             <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
            
        </div>
    )
}
export default Search; */