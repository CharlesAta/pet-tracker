import "./ThankYouPage.css";
import React from 'react'
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container} from "react-bootstrap";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as BellWithClouds } from "../../assets/BellwithCloud.svg";
import { ReactComponent as PaperairplanewithCloud } from "../../assets/PaperairplanewithCloud.svg";
import { ReactComponent as SearchwithCloud } from "../../assets/SearchwithCloud.svg";


export default function ThankYouPage(props) {
    return (
        <>
        <div className="thankyou-page" stye={{ minHeight: "100vh" }}>
        <NavBar user={props.user} setUser={props.setUser}/>
        <div className="center-thankyou mt-5">
        <div className="thankyou-container">
            <Row>
            <Row>
               <Col xs={2}>
               <FontAwesomeIcon icon={faCheckCircle} style={{color: "#11AA66", fontSize: "5rem"}}/>
               </Col>
               <Col xs={9}>
                <h3>Thank you for your submission!</h3>
                <p>We appreciate your help, and your report is a lifesaver for owners who have lost a family member.</p>
                <p>POST ID</p>
               </Col>
               <Col xs={1}>
                    <FontAwesomeIcon icon={faTimes} />
               </Col> 
            </Row>
        </Row>
        </div>        
        </div>

       <div>
        Go Above and Beyond!
      </div>

        <div className="thankyou-sub-containers">

            <Col xs={4} className="thankyou-sub-container">
            <figure class="snip1192">
            <div class="author">
                <BellWithClouds className="img-fluid image-thing" />
            </div>
            <div>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </div>
            </figure>
            </Col>
            <Col xs={4} className="thankyou-sub-container" >
                <div>
                    <SearchwithCloud className="img-fluid" />
                </div>
                lalalala
            </Col>
            <Col xs={4} className="thankyou-sub-container">
                <div>
                    <PaperairplanewithCloud className="img-fluid" />
                </div>
                lalalal
            </Col>


        </div>
        </div>
        </>
    )
}
