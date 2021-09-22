import React, { useState, useEffect } from "react";
import "./Profile.css";
import PetList from '../../components/PetList/PetList';
import NavBar from '../../components/NavBar/NavBar';
import { Tabs, Tab, Nav, Button, Row, Col, Container } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";

export default function Profile(props) {
    const [postState, setPostState] = useState([])
    
   useEffect(async() => {
       try {
         let fetchItemsResponse = await fetch(`/api/users/${props.user._id}`) 
         let posts = await fetchItemsResponse.json();
         setPostState(posts)

       } catch (err) {
         console.error('ERROR:', err) 
       }
       props.setProfile(true)
      }, [setPostState])


    return (
        <>
        <div className="profile" style={{ minHeight: "100vh" }}>
        <NavBar user={props.user} setUser={props.setUser}/>
        <Container>
            <UserInfo user={props.user}/>
        </Container>
        <Container>
            <h2 style={{color: "white"}} className="ml-5 mb-1">Posts</h2>
            <PetList profile={props.profile} posts={postState}/>
        </Container>
        </div>
        </>
    )
}
