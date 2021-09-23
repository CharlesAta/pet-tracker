import React, {useEffect, useState} from 'react'
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import {Container, Row, Col} from "react-bootstrap";
import PetList from '../../components/PetList/PetList';
import "./SearchResults.css";

// searchResults={props.searchResults} setSearchResults={props.setSearchResults} 

export default function SearchResults(props) {

    const [postState, setPostState] = useState(props.searchResults)

    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(postState.length) 
    const [totalPages, setTotalPages] = useState(Math.ceil(count/5))

    const [newSearch, setNewSearch] = useState(false)

    useEffect(() => {

        if(newSearch) {
            setPostState(props.searchResults)
            setPosts(postState)
            setNewSearch(false)
        } else {

            const startIndex = (page - 1) * 5
            const endIndex = page * 5
            setPosts(postState.slice(startIndex, endIndex))
        }

      }, [setPostState, page, newSearch])

      const handlePageChange = (e) => {
        setPage(e.target.textContent)
      }

    function searchExecute() {
        setNewSearch(true)
    }
  
   
    return (
      <>
        <div className="posting" style={{ minHeight: "100vh" }}>
        <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults} user={props.user} setUser={props.setUser}/>
        <Container>
          <Row >
              <Col className="d-flex justify-content-center">
          <h1 className="search-results mt-5">Search Results</h1>
            </Col>
        </Row>
        </Container>
        <Container className="d-flex flex-row justify-content-center">
        <PetList profile={props.profile} handlePageChange={handlePageChange} totalPages={totalPages} posts={posts} page={page} setPage={setPage}/>
        </Container>
        </div> 
      </>
    )
}
