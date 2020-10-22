import React from "react";


const Grid = ({country}) =>{

    return(
      <div>
 {country.map((el) => {
 
return (
    <div id="container" className ="container col-sm-4 ">
<div id="card" class="card">
  <img id="img" class="card-img-top" src={el.flag} alt="Card image"/>
  <div class="card-body">
<h4 class="card-title">{el.name}</h4>
<span class="card-text">population: {el.population.toLocaleString("en")}</span>
<br/>
<span class="card-text">Region: {el.region}</span>
<br/>
<span class="card-text">Capital: {el.capital}</span>
   
  </div>
</div>
  
    </div>
);


 })}
      </div>
        
    

    );
}

export default Grid;