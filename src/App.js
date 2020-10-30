import React, {useState} from 'react';
import countriesAll from"./countriesAll.json";
import './App.css';
import RegionSelect from "./RegionSelect"
import Grid from "./Grid"
import CountrySelect from "./CountrySelect"


function searchFunction(inputSearch){
  return(result) =>{
    return(!inputSearch || result.name.toLowerCase().includes(inputSearch) || result.capital.toLowerCase().includes(inputSearch));
    
  }
    

}
function regionSearchFunction(region){
  return(el) =>{
    return(!region ||  el.region === region);
    
  }
    

}

function App() {
  const [inputSearch,setInputSearch] =useState("");
  const [region, setRegion] = useState("");
  const [displayedpage, setDisplayedpage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);
 
const regionHandler =(event) =>{
setRegion(event.target.value);
}
let searchInputResults = countriesAll.filter(searchFunction(inputSearch));
let regionSearchresults = searchInputResults.filter(regionSearchFunction(region));
  
const countryHandler = (el)=>{
  setDisplayedpage(true);
setSelectedCountry(el);
}
const backButton = () =>{
setDisplayedpage(false);
}
const borderHandler = (border) =>{
  setSelectedCountry(border);
}


  return (
    <div>
  <input type="text" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
     <RegionSelect regionHandler={regionHandler}/>
     {displayedpage? (<CountrySelect selectedCountry={selectedCountry} backButton={backButton} borderHandler={borderHandler}/>) : null}
{!displayedpage? (<Grid regionSearchresults={regionSearchresults} countryHandler={countryHandler}/>) : null}
    </div>
     
    
  );
}


export default App;


