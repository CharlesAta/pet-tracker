import React, {useState} from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Search.css";
import { MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search(props) {
  const [localSearchQuery, setLocalSearchQuery] = useState("")
  

  function handleChange(e) {   
    setLocalSearchQuery(e.target.value)
  }


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    props.setSearchQuery(localSearchQuery)
    try {
      let fetchResponse = await fetch(`/api/posts/search?s=${localSearchQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      let serverResponse = await fetchResponse.json();
      props.setSearchResults(serverResponse)
      props.searchExecute()
    } catch (err) {
      console.log(err)
    }
  }


  return (
      <div className="search-icon">
        <i class="fas fa-search"></i>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="search">
              <Form.Control
                type="text"
                name="search"
                placeholder= "Search..."
                id="search"
                value={localSearchQuery}
                onChange={handleChange}
                required
              />
            </Form.Group>
        </Form>
      </div> 
  );
}




