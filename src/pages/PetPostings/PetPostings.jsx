import React, {useEffect, useState} from 'react'
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import {Container, Row, Col} from "react-bootstrap";
import PetList from '../../components/PetList/PetList';

export default function PetPosting(props) {
    const [postState, setPostState] = useState([])

   useEffect(async() => {
       try {
         let fetchItemsResponse = await fetch('/api/posts') 
         let posts = await fetchItemsResponse.json(); 
         setPostState (posts)
       } catch (err) {
         console.error('ERROR:', err) 
       }
      }, [setPostState])


    return (
      <>
        <div className="posting">
        <NavBar user={props.user} setUser={props.setUser}/>
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-3 ">Lost and Fount Pets in Toronto, Ontario </h1> 
        </Container>
        <Container>
          <Row >
              <Col className="d-flex justify-content-center">
          <Search />
        </Col>
        </Row>
        </Container>
        <Container className="d-flex flex-row justify-content-center">
        <PetList posts={postState}/>
        </Container>
        </div> 
      </>
    )
}
