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
  const [theme, setTheme] = useState("day");
 
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
const borderHandler = (borderCountry) =>{
  setSelectedCountry(borderCountry[0]);
}
const themChanger =()=>{
  if(theme ==="night"){
    setTheme("day")
  } else{
    setTheme("night")
  }
}


  return (
    <div className ={theme}>
      <div className ="header">
        
  <input className ="searchbar"placeholder="Search here" type="text" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
  <button className="btn-primary"onClick={themChanger}>Change Theme</button>
     <RegionSelect regionHandler={regionHandler}/>
      </div>
      
     {displayedpage? (<CountrySelect countriesAll={countriesAll} selectedCountry={selectedCountry} backButton={backButton} borderHandler={borderHandler}/>) : null}
{!displayedpage? (<Grid regionSearchresults={regionSearchresults} countryHandler={countryHandler} theme={theme}/>) : null}
    </div>
     
    
  );
}


export default App;


