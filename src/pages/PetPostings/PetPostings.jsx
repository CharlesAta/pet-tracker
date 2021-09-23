import React, {useEffect, useState} from 'react'
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import {Container, Row, Col} from "react-bootstrap";
import PetList from '../../components/PetList/PetList';

export default function PetPosting(props) {
    const [postState, setPostState] = useState([])

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

   useEffect(async() => {
       try {
         let fetchItemsResponse = await fetch(`/api/posts?page=${page}`) 
         let {posts, totalPages} = await fetchItemsResponse.json(); 
         setPostState (posts)
         setTotalPages(totalPages)
         props.history.push(`/postings/${parseInt(page)}`)

       } catch (err) {
         console.error('ERROR:', err) 
       }
       props.setProfile(false)
      }, [setPostState, page])

      const handlePageChange = (e) => {
        setPage(e.target.textContent)
      }

  function searchExecute() {
    props.history.push('/searchresults') 
  }
  

    return (
      <>
        <div className="posting" style={{ minHeight: "100vh" }}>
        <NavBar searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} searchExecute={searchExecute} searchResults={props.searchResults} setSearchResults={props.setSearchResults}  user={props.user} setUser={props.setUser}/>
        <Container>
          <Row >
              <Col className="d-flex justify-content-center">
          <Search />
        </Col>
        </Row>
        </Container>
        <Container className="d-flex flex-row justify-content-center">
        <PetList profile={props.profile} handlePageChange={handlePageChange} totalPages={totalPages} posts={postState} page={page} setPage={setPage}/>
        </Container>
        </div> 
      </>
    )
}
