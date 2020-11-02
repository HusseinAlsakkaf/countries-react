import React from "react";
import BorderCountries from "./BorderCountries";
function CountrySelect({ selectedCountry, backButton, borderHandler}) {
  
  return (
    <div className="singleCard">
      <div>
        <img id="flag" src={selectedCountry.flag} className="flags" alt="flag"></img>
        <h3>{selectedCountry.name}</h3>
        <p>Native Name: {selectedCountry.nativeName}</p>
        <p>Population: {selectedCountry.population.toLocaleString()}</p>
        <p>Region: {selectedCountry.region}</p>
        <p>Sub Region: {selectedCountry.subregion}</p>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Top Level Domain: {selectedCountry.topLevelDomain}</p>
        <ul>
          Currencies:  {selectedCountry.currencies.map((currancy)=>(
              <li>{currancy.name}</li>
          ))}
        </ul>
        <ul>
          Languages: {selectedCountry.languages.map((lang)=>(
              <li>{lang.name}</li>
          ))} 
        </ul>
        
        <ul>
         
           Bordering Countries: 
            <BorderCountries borders={selectedCountry.borders} borderHandler={borderHandler}/>
            
        </ul>
      </div>
      <button id="back-btn"className="btn-primary"onClick={backButton}>Back</button>
    </div>
  );
}
export default CountrySelect;