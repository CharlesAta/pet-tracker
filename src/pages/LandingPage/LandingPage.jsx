import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";
import ReactLoading from 'react-loading';

import "./LandingPage.css";

export default function LandingPage(props) {


  const [latestPost, setLatestPost] = useState({
    status: "",
    species: "",
    date: "",
    location: ""
  })

  const [loading, setLoading] = useState(false)

  useEffect(async() => {

     try {
      setLoading(true)
       let fetchItemsResponse = await fetch(`/api/posts/latest`) 
       let latestPost = await fetchItemsResponse.json(); 
       setLoading(false)
       setLatestPost(latestPost[0])
     } catch (err) {
       console.error('ERROR:', err) 
     }

    }, [setLatestPost])

    function searchExecute() {
      props.history.push('/searchresults') 
    }

  return (
    <div
      className="landing"
      id="home"
      style={
        props.user
          ? { minHeight: "100vh", maxWidth: "100%"}
          : { minHeight: "96vh", maxWidth: "100%"}
      }
    >
      <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults} user={props.user} setUser={props.setUser} />
      {props.user ? 
      <div className="d-flex margin-top">
        <Link to="/reportpet" onClick={()=> props.setPetStatus("lost")} >
      <div className="glass-container d-flex justify-content-center align-items-center container-text">
        I Lost My Pet
      </div>
      </Link>
      <Link to="/reportpet" onClick={()=> props.setPetStatus("found")}>
      <div className="glass-container d-flex justify-content-center align-items-center container-text" >
        I Found A Pet
      </div>
      </Link>
  </div>
        :
      <div className="d-flex margin-top">
          <div className="glass-container d-flex justify-content-center align-items-center container-text" onClick={() => {
                    window.location.replace("/#auth");
                  }}>
            I Lost My Pet
          </div>
          <div className="glass-container d-flex justify-content-center align-items-center container-text" onClick={() => {
                    window.location.replace("/#auth");
                  }}>
            I Found A Pet
          </div>
      </div>
      }
      <Row className="landing-footer">
        {loading ?
            <div className="glass-container align-bottom-left latest-post pl-3">
            <ReactLoading type={"spinningBubbles"}  color={"#ffffff"} height={'20%'} width={'20%'} />
            </div>
          
          :
          <>
          {latestPost ?
          <>
        <div className="glass-container align-bottom-left latest-post pl-3" style={latestPost.status === "lost" ? {backgroundColor: "rgba(121, 0, 0, 0.3)"} : {backgroundColor: "rgba(0, 32, 121, 0.3)"} }>
          <div><strong>{latestPost.status.toUpperCase()} {latestPost.species.toUpperCase()}</strong> </div> 
          <div>{new Date(latestPost.date).toLocaleDateString()}</div>
          <div>{latestPost.location}</div>
        </div>
          </>
          :
          <>
          <div className="glass-container align-bottom-left latest-post pl-3">
          <p>No New Posts</p>
          </div>
          </>
          }
          </>
          }
        <div className="glass-container align-bottom-right d-flex">
          Share to
          <FacebookShareButton 
                url={window.location.href}
                quote={"Paway - Reuniting pets with owners"}
                hashtag="#Paway">
                <i className="fab fa-facebook-f"></i>
          </FacebookShareButton>

          <WhatsappShareButton 
                url={window.location.href}
                quote={"Paway - Reuniting pets with owners"}
                hashtag="#Paway">
                <i className="fab fa-whatsapp"></i>
          </WhatsappShareButton>
         

          <TwitterShareButton 
                url={window.location.href}
                quote={"Paway - Reuniting pets with owners"}
                hashtag="#Paway">
                <i className="fab fa-twitter"></i>
          </TwitterShareButton>
                    
        </div>
      </Row>
    </div>
  );
}

