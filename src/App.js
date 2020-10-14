import React, {useState} from 'react';
import countriesAll from"./countriesAll.json";
import './App.css';
import Grid from './Grid';


function App() {
const [q,setQ] = useState("");

function search(countriesAll){
return countriesAll.filter(result => result.name.toLowerCase().indexOf(q) > -1 || result.capital.toLowerCase().indexOf(q) > -1)
}
  return (
    <div>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
<Grid data={search(countriesAll)}/>
    </div>
     
    
  );
}

export default App;
