import React from 'react'

export default function LocationFilter(props) {

    const BarStyling = {width:"700px", background:"#F2F1F9", border:"none", borderRadius:"15px", padding:"0.5rem",  borderLeft: "1px dotted green"};

    return (
        <>
        <input 
        className="location-filter-bar"
        style={BarStyling}
        key="random2"
        type="selection"
        value={props.locationSearch}
        placeholder="Search by Location"
        onChange={(e) => props.handleLocationChange(e)}
        />
        
        </>
    )
}
