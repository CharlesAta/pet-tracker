import React from 'react'

export default function RegularFilter(props) {

    const BarStyling = {width:"278px",background:"#F2F1F9", border:"none", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", padding:"0.5rem", borderRight: "1px dotted green"};

    return (
        <>
        <input 
        className="regular-filter"
        style={BarStyling}
        key="random3"
        type="text"
        value={props.normalSearch}
        placeholder="Search by Pet name, Post ID etc."
        onChange={(e) => props.handleRegularChange(e)}
        />
        </>

    )
}
