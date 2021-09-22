import React from 'react'
import "./PetList.css";
import PetListItem from "../PetListItem/PetListItem";
import Pagination from '@material-ui/lab/Pagination';

export default function PetList(props) {
    console.log(props.totalPages)
    console.log(props.page)

    

    return (
      <>
      <div className="posting-page">
      <div >
        {props.posts.map(post =>
          <PetListItem post={post}/>)}
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
