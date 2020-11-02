import React from "react"

const RegionSelect = ({regionHandler}) => {

    return (
 <div>
            <label for = 'region'>Choose a Region:  </label>
            <select name = 'region' id = 'region' onChange = {(event) => regionHandler(event)}>
                <option value = "">Filter by Region</option>
                <option value = "Africa">Africa</option>
                <option value = "Americas">Americas</option>
                <option value = "Asia">Asia</option>
                <option value = "Europe">Europe</option>
                <option value = "Oceania">Oceania</option>
                <option value = "Polar">Polar</option>
            </select>
        </div>
    );
}

export default RegionSelect;