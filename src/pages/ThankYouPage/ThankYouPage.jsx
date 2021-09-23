import "./ThankYouPage.css";
import React from 'react'
import NavBar from "../../components/NavBar/NavBar";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container} from "react-bootstrap";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as BellWithClouds } from "../../assets/BellwithCloud.svg";
import { ReactComponent as PaperairplanewithCloud } from "../../assets/PaperairplanewithCloud.svg";
import { ReactComponent as SearchwithCloud } from "../../assets/SearchwithCloud.svg";


export default function ThankYouPage(props) {

    
    function searchExecute() {
        props.history.push('/searchresults') 
      }

    return (
        <>
        <div className="thankyou-page" style={{ minHeight: "100vh"}}>
        <NavBar searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  user={props.user} setUser={props.setUser}/>
        <div className="center-thankyou mt-5">
        <div className="thankyou-container">
            <Row>
            <Row>
               <Col xs={2}>
               <FontAwesomeIcon icon={faCheckCircle} style={{color: "#11AA66", fontSize: "8rem"}}/>
               </Col>
               <Col xs={9}>
                {props.thankYouPost.status === "found" ? 
                   <>
                <h2>Thank you for your submission!</h2>
                <hr/>
                <p className="subheader-content">We appreciate your help, and your report is a lifesaver for owners who have lost a family member.</p>
                <p className="post-id-content">          
                    <Link className="link-style" to={{pathname: '/details/' + props.thankYouPost.id}}>
                    POST ID: {props.thankYouPost.id}
                    </Link>
                </p>
                </>
                :
                <>
                <h2>Losing your pet can be terrifying, but we’re right here with you!</h2>
                <hr/>
                <p className="subheader-content">We at Paway and those in your areas are here to help! We hope you and your pet can be reunited soon!</p>
                <p className="post-id-content">
                    <Link className="link-style" to={{pathname: '/details/' + props.thankYouPost.id}}>
                    POST ID: {props.thankYouPost.id}
                    </Link>
                </p>
                </>
                }
               </Col>
               <Col xs={1} className="closing-icon"  >
               <Link className="link-style" to={{pathname: '/details/' + props.thankYouPost.id}}>
                    <FontAwesomeIcon icon={faTimes} />
                </Link>
               </Col> 
            </Row>
        </Row>
        </div>        
        </div>




       <div className="text-submission">
        Go Above and Beyond!
      </div>

        <div className="thankyou-sub-containers">

            <Col xs={4} className="thankyou-sub-container">
            <figure className="snip1192">
            <div className="author">
                <BellWithClouds className="img-fluid image-thing mt-5" />
            </div>
            <div className="sub-container-text">Check Your Email</div>
            </figure>
            </Col>
            <Col xs={4} className="thankyou-sub-container" >
            <figure className="snip1192">
            <div className="author">
                <SearchwithCloud className="img-fluid image-thing mt-5" />
            </div>
            <div className="thankyou-content">
                <div className="sub-container-text">Search Paway's Databse</div>
                <div class="search-reports-button">
                <Link to="/postings" >
                <Button>Search Reports</Button>
                </Link>
                </div>
            </div>
            </figure>
            </Col>
            <Col xs={4} className="thankyou-sub-container">
            <figure className="snip1192">
            <div className="author">
                <PaperairplanewithCloud className="img-fluid image-thing mt-5" />
            </div>
                <div className="sub-container-text">Share Your Post</div>
                <div className="share-container">
                <span style={{fontSize: "1.2rem"}}>Share to</span>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>

                </div>
            </figure>
            </Col>
        </div>
        </div>
        </>
    )
}
