import React, {useState} from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import "./Search.css";
import { MDBCol } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  const [searchResult, setSearchResult] = useState()


  function handleChange(e) {
    console.log(e.target.value)
    setSearchResult(e.target.value)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch(`/api/posts/search?s=${searchResult}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
      });

      let serverResponse = await fetchResponse.json();

    } catch (err) {
      console.log(err)
    }
  }
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('search');

  // console.log("query is: ": query)

  // const filterPosts = (posts, query) => {
  //   if (!query) {
  //       return posts;
  //   }

  //   return posts.filter((post) => {
  //       const postName = post.name.toLowerCase();
  //       return postName.includes(query);
  //   });


  return (
      <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="search">
              <Form.Control
                type="text"
                name="search"
                placeholder= "Search..."
                id="search"
                value={searchResult}
                onChange={handleChange}
                required
              />
            </Form.Group>
        </Form>
      </div> 
  );
}




