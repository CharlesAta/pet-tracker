import React, {useEffect, useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Details.css";
import { Badge } from "react-bootstrap";
export default function Details(props) {
    const [petState, setPetState] = useState([])

    useEffect(async() => {
        try {
          let fetchItemsResponse = await fetch(`/api/posts/${props.match.params.id}`) 
          let details = await fetchItemsResponse.json(); 
          setPetState(details)
          console.log(petState)
        } catch (err) {
          console.error('ERROR:', err) 
        }
       }, [])

    return (
        <>
        <div className="details"  style={{ minHeight: "100vh" }}>
          <NavBar user={props.user} setUser={props.setUser}/>
          <div class="detail-center mt-5">
          <div class="detail-container">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
          <h1>
            <Badge className={petState.status === "lost"? "detail-badge-lost mt-5":"detail-badge-found mt-5"}>{petState.status} </Badge>
          </h1>
          <span className="mt-5"><b>Post ID: {petState._id}</b></span>
          </div>
           
          </div>
          </div>
        </div>
        </>
    )
}
