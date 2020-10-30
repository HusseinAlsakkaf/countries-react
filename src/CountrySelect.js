import React from "react";
import countriesAll from"./countriesAll.json";
function CountrySelect({ selectedCountry, backButton, borderHandler}) {
  return (
    <div className="singleCard">
      <div>
        <img src={selectedCountry.flag} className="flags" alt="flag"></img>
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
         
           Bordering Countries: {selectedCountry.borders.map((border)=>(
            
             
            
                <li /* onClick={borderHandler(border)} */>{border}</li>
              
            ))}
            
        </ul>
      </div>
      <button onClick={backButton}>Back</button>
    </div>
  );
}
export default CountrySelect;