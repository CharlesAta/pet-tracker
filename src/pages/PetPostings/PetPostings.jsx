import React, {useEffect, useState} from 'react'
import NavBar from "../../components/NavBar/NavBar";
import {Container, Row, Col, Button} from "react-bootstrap";
import PetList from '../../components/PetList/PetList';
import DateFilter from '../../components/DateFilter/DateFilter';
import SpeciesFilter from '../../components/SpeciesFilter/SpeciesFilter';
import RegularFilter from '../../components/RegularFilter/RegularFilter';
import LocationFilter from '../../components/LocationFilter/LocationFilter';
import "./PetPostings.css";
import ReactLoading from 'react-loading';

export default function PetPosting(props) {
    const [postState, setPostState] = useState([])
    const [date, setDate] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [filteredPosts, setFilteredPosts] = useState([]) 

    const [newPostSearch, setNewPostSearch] = useState(false)
    const [filterOn, setFilterOn] = useState(false)
    const [resetPosts, setResetPosts] = useState(false)

    const [species, setSpecies] = useState("")

    const [normalSearch, setNormalSearch] = useState("")

    const [locationSearch, setLocationSearch] = useState("")

    const [allPosts, setAllPosts] = useState([])

    const [loading, setLoading] = useState(false)

   useEffect(async() => {
      try {
        setLoading(true)
        let fetchItemsResponse = await fetch(`/api/posts?page=${page}`) 
        let fetchAllItemsResponse = await fetch(`/api/posts/all`)
        let {posts, totalPages} = await fetchItemsResponse.json(); 
        let allPosts = await fetchAllItemsResponse.json()
        setLoading(false)
        setPostState (posts)
        setAllPosts(allPosts)
        setFilteredPosts(posts)
        setTotalPages(totalPages)
        props.history.push(`/postings/${parseInt(page)}`)
  
      } catch (err) {
        console.error('ERROR:', err) 
      }
       props.setProfile(false)
      }, [setPostState, page ])

    useEffect(() => {
        if (date) {
          const filtered = allPosts.filter(post => {
            if (post.date) {
              return new Date(post.date).toISOString().split('T')[0] == date
            } else {
              return false
            }
          })
          setFilteredPosts(filtered)
        
        } else if (species) {
          const filtered = allPosts.filter(post => {
          return post.species.toLowerCase().includes(species)})
          setFilteredPosts(filtered)
        } else if (normalSearch) {
          const filtered = allPosts.filter(post => {
            return (post.name.trim().toLowerCase().includes(normalSearch) || post._id.trim().toLowerCase().includes(normalSearch))
          })
            setFilteredPosts(filtered)
        } else if (locationSearch) {
          const filtered = allPosts.filter(post => {
            return (post.postalCode.toLowerCase().includes(locationSearch) || post.location.toLowerCase().includes(locationSearch))
          })
            setFilteredPosts(filtered)
        }
        setNewPostSearch(false)
    }, [newPostSearch])

    useEffect(()=>{

      setFilterOn(false)
      
    }, [resetPosts])

    const handleReset = () => {
      setResetPosts(true)
      setNormalSearch("")
      setSpecies("")
      setDate("")
      setFilteredPosts(postState)
    }

    const handlePageChange = (e) => {
      setPage(e.target.textContent)
    }

    function handleDateChange (e) {
      setDate(new Date(e.target.value).toISOString().split('T')[0])
      setFilterOn(true)
      setNewPostSearch(true)
    }

    function handleSpeciesSelect (e) {
      setSpecies((e.target.value).toLowerCase().trim())
      setFilterOn(true)
      setNewPostSearch(true)
    }

    function handleRegularChange (e) {
      setNormalSearch((e.target.value).trim().toLowerCase())
      setFilterOn(true)
      setNewPostSearch(true)
    }

    function handleLocationChange (e) {
      setLocationSearch((e.target.value).toLowerCase())
      setFilterOn(true)
      setNewPostSearch(true)
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
            <Col className="d-flex justify-content-center mt-5">
        <RegularFilter handleRegularChange={handleRegularChange} normalSearch={normalSearch} setNormalSearch={setNormalSearch}/>
        <DateFilter  handleDateChange={handleDateChange} date={date} setDate={setDate}/>
        <SpeciesFilter handleSpeciesSelect={handleSpeciesSelect} species={species} setSpecies={setSpecies}/>
            </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-2">
          <LocationFilter locationSearch={locationSearch} handleLocationChange={handleLocationChange}/>
          <Button className="search-reset" onClick={()=> handleReset()}>Reset Filter</Button>
          </Col>
        </Row>
        </Container>
        <Container className="d-flex flex-row justify-content-center">
        { loading ? 
          <div style={{display: "flex", justifyContent:"center", alignItems: "center", height: "30vh"}}>
          <ReactLoading type={"spinningBubbles"}  color={"#ffffff"} height={'20%'} width={'20%'} />
          </div>
          :  
        <PetList filterOn={filterOn} profile={props.profile} handlePageChange={handlePageChange} totalPages={totalPages} posts={filteredPosts} setPage={setPage}/>
      }
        </Container>
        </div> 
      </>
    )
}
