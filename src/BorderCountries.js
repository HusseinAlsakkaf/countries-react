import React from "react"
import countriesAll from"./countriesAll.json";
const BorderCountries =({borders,borderHandler})=>{

let borderCountries;
borderCountries = borders.map((border)=>(
            
          countriesAll.filter((country)=> (
                  country.alpha3Code == border
           ))

       
                
              
))

 
    return (
        <div>
    
        {
        borderCountries.map((borderCountry) => (
            <div>
                <h4>{borderCountry[0].name}</h4>
 <img id="flagBorder" src={borderCountry[0].flag} onClick={()=>borderHandler(borderCountry)} />
            </div>
      
            
         ))
        }

        
       
        </div>

    );
           }
export default BorderCountries;