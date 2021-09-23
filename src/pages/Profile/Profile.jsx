import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserPetList from '../../components/UserPetList/UserPetList';
import NavBar from '../../components/NavBar/NavBar';
import { Tabs, Tab, Nav, Button, Row, Col, Container } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";

export default function Profile(props) {
    const [postState, setPostState] = useState([])
    const [userInformation, setUserInformation] = useState({
      name:"name", 
      email:"hello"
    })

    const [updateDelete, setUpdateDelete] = useState(false)
    
   useEffect(async() => {
       try {
         let fetchItemsResponse = await fetch(`/api/users/${props.user._id}`) 
         let userResult = await fetchItemsResponse.json();

         setUserInformation(userResult)
         setPostState(userResult.post)
         
       } catch (err) {
         console.error('ERROR:', err) 
       }
       props.setProfile(true)
       props.setUpdatedAccount(false)
       setUpdateDelete(false)
      }, [setUserInformation, props.updatedAccount, updateDelete])


    function searchExecute() {
      props.history.push('/searchresults') 
    }

    return (
        <>
        <div className="profile" style={{ minHeight: "100vh" }}>
        <NavBar searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  user={props.user} setUser={props.setUser}/>
        <Container>
            <UserInfo updatedAccount={props.updatedAccount} setUpdatedAccount={props.setUpdatedAccount} userInformation={userInformation} setUserInformation={setUserInformation}/>
        </Container>
        <Container>
            <UserPetList updateDelete={updateDelete} setUpdateDelete={setUpdateDelete} user={props.user} profile={props.profile} posts={postState}/>
        </Container>
        </div>
        </>
    )
}


