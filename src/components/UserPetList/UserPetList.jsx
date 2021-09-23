import React from 'react'
import "./UserPetList.css";
import PetListItem from "../PetListItem/PetListItem";
import Pagination from '@material-ui/lab/Pagination';
import UserPetListItem from "../UserPetListItem/UserPetListItem"
export default function PetList(props) {


    return (
      <>
      <div className="posting-page">
      <div >
          {props.posts.length ? 
          <>
          {props.posts.map(post =>
            <UserPetListItem key={post._id + 1} setUpdateDelete={props.setUpdateDelete} updateDelete={props.updateDelete} user={props.user} post={post}/>)}
          </>
          :
          <div className="center-user-posting mt-3">
              <div className="user-posting-container">
            <h1>No Posts Yet</h1>
            </div>
          </div>
        }
      </div>

      {props.profile ?
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
