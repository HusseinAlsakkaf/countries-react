import React from "react";
import countriesAll from"./countriesAll.json";

const Grid = () =>{

    return(
        <div>
<img src={countriesAll[0].flag}/>
        </div>

    );
}

export default Grid;