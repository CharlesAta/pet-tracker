import React from 'react'
import "./Profile.css";
import NavBar from '../NavBar/NavBar';

export default function Profile(props) {
    return (
        <>
        <NavBar user={props.user} setUser={props.setUser}/>
            Profile Page
        </>
    )
}
