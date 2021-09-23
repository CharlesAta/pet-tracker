import React, { useState, useEffect } from "react";
import "./Profile.css";
import UserPetList from '../../components/UserPetList/UserPetList';
import NavBar from '../../components/NavBar/NavBar';
import { Tabs, Tab, Nav, Button, Row, Col, Container } from "react-bootstrap";
import UserInfo from "../../components/UserInfo/UserInfo";
import ReactLoading from 'react-loading';

export default function Profile(props) {
    const [postState, setPostState] = useState([])
    const [userInformation, setUserInformation] = useState({
      name:"name", 
      email:"hello"
    })

    const [updateDelete, setUpdateDelete] = useState(false)
    
    const [loading, setLoading] = useState(false)
    
   useEffect(async() => {
       try {
         setLoading(true)
         let fetchItemsResponse = await fetch(`/api/users/${props.user._id}`) 
         let userResult = await fetchItemsResponse.json();
         setLoading(false)

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
        <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  user={props.user} setUser={props.setUser}/>
        <Container>
            <UserInfo updatedAccount={props.updatedAccount} setUpdatedAccount={props.setUpdatedAccount} userInformation={userInformation} setUserInformation={setUserInformation}/>
        </Container>
        <Container>
          { loading ? 
          <div style={{display: "flex", justifyContent:"center", alignItems: "center", height: "30vh"}}>
           <ReactLoading type={"spinningBubbles"}  color={"#ffffff"} height={'20%'} width={'20%'} />
          </div>
        :  
            <UserPetList updateDelete={updateDelete} setUpdateDelete={setUpdateDelete} user={props.user} profile={props.profile} posts={postState}/>
        }
        </Container>
        </div>
        </>
    )
}


