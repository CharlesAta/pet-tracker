import React from 'react'
import "./PetList.css";
import PetListItem from "../PetListItem/PetListItem";
import Pagination from '@material-ui/lab/Pagination';

export default function PetList(props) {


    return (
      <>
      <div className="posting-page mt-5">
      <div >
        {props.posts.map(post =>
          <PetListItem setUpdateDelete={props.setUpdateDelete} updateDelete={props.updateDelete} user={props.user} post={post}/>)}
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
