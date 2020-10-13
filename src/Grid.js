import React from "react";
import countriesAll from"./countriesAll.json";

const Grid = () =>{

    return(
      <div>
 {countriesAll.map((el) => {
 
return (
    <div id="container" className ="container col-sm-4 ">
<div id="card" class="card">
  <img id="img" class="card-img-top" src={el.flag} alt="Card image"/>
  <div class="card-body">
<h4 class="card-title">{el.name}</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>
  
    </div>


);


 })}
      </div>
        
    

    );
}

export default Grid;