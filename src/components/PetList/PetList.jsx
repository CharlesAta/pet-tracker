import React from 'react'
import "./PetList.css";
import PetListItem from "../PetListItem/PetListItem";
import Pagination from '@material-ui/lab/Pagination';

export default function PetList(props) {

    return (
      <>
      <div className="posting-page mt-5">
        
      <div >
      {props.posts.length ? 
          <>
        {props.posts.map(post =>
          <PetListItem key={post._id} setUpdateDelete={props.setUpdateDelete} updateDelete={props.updateDelete} user={props.user} post={post}/>)}
          </>
          :
          <div className="center-user-posting mt-3">
          <div className="user-posting-container">
        <h1>No Postings Yet</h1>
        </div>
      </div>
    }
      </div>


      {(props.profile || props.filterOn) ?
      <>
      </>
      :
        <div style={{ textAlign: "center", display: 'flex', justifyContent: "center"}}>
            <Pagination onChange={props.handlePageChange} count={props.totalPages} />
        </div>
    }
        </div>
      </>
    )
}
