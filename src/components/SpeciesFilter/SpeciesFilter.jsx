import React from 'react'



export default function SpeciesFilter(props) {

    const BarStyling = {width:"18vw", background:"#F2F1F9", border:"none", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", padding:"0.5rem",  borderLeft: "1px dotted green"};
    return (
        <>
        <input 
        style={BarStyling}
        key="random2"
        type="selection"
        value={props.species}
        placeholder="Search by Animal"
        onChange={(e) => props.handleSpeciesSelect(e)}
        />
        
        </>
    )
}
