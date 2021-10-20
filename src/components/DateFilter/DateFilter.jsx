import React from 'react'


export default function DateFilter(props){

    const BarStyling = {width:"278px",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <>
        <input
        className="date-filter" 
        style={BarStyling}
        key="random1"
        type="date"
        value={props.date}
        placeholder={"Search by date"}
        onChange={(e) => props.handleDateChange(e)}
        />
        
        </>
    )
}
