import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import countriesAll from './countriesAll';
import SearchBar from './SearchBar';
import Continents from './Continents';
import Grid from './Grid';
function App() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value); 
   
}
  const [regionsOption, setRegionsOption] = useState("");
  function handleRegionEvent(event) {
    setRegionsOption(event.target.value)
  }
  let countryObject = countriesAll.filter(country => country.name.toLowerCase().includes(    searchInput.toLowerCase()  )
  || country.capital.toLowerCase().includes(    searchInput.toLowerCase()  ));
  let regionObject = countryObject.filter(country => country.region.toLowerCase().includes(regionsOption.toLowerCase()))
  return (
    <div className="App">
      <Header />
      <SearchBar handleSearchInput = {handleSearchInput} searchInput = {searchInput}/>
      <Continents handleRegionEvent = {handleRegionEvent} />
      <div className = 'cards-container'>
      {regionObject.map((country) =>
        <Grid country = {country} key = {country.alpha2Code}/>
      )}
      </div>
    </div>
  );
}
export default App;




















/* import React, {useState} from 'react';
import countriesAll from"./countriesAll.json";
import './App.css';
import Grid from './Grid';
import Search from './Search';


 



function App({search}) {
  
  const [q,setQ] = useState("");
function search(countriesAll){
return countriesAll.filter(result => result.name.toLowerCase().indexOf(q) > -1 || result.capital.toLowerCase().indexOf(q) > -1)
}


  return (
    <div>
     <Search countriesAll={countriesAll}/>
<Grid data={search(countriesAll)}/>
    </div>
     
    
  );
}

export default App; */
