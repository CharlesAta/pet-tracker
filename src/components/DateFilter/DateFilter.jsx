import React from 'react'


export default function DateFilter(props){

    const BarStyling = {width:"17.5vw",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <>
        <input 
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
