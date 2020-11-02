import React from "react";


const Grid = ({regionSearchresults,countryHandler,theme}) =>{

    return(
      <div>
 {regionSearchresults.map((el) => {
 
return (
    <div id="container" className ="container col-sm-4">
<div id="card" className={"card" + theme} >
  <img id="img" className="card-img-top" src={el.flag} alt="Card image" onClick={()=>countryHandler(el)}/>
  <div className="card-body">
<h4 className="card-title">{el.name}</h4>
<span className="card-text">population: {el.population.toLocaleString("en")}</span>
<br/>
<span className="card-text">Region: {el.region}</span>
<br/>
<span className="card-text">Capital: {el.capital}</span>
   
  </div>
</div>
  
    </div>
);


 })}
      </div>
        
    

    );
}

export default Grid;