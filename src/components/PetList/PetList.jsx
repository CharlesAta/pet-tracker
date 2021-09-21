import React from 'react'
import "./PetList.css";
import PetListItem from "../PetListItem/PetListItem";
import Pagination from '@material-ui/lab/Pagination';

export default function PetList(props) {
  
    return (
      <>
      <div className="posting-page">
      <div >
        {props.posts.map(post =>
          <PetListItem post={post}/>)}
      </div>
        <div style={{ textAlign: "center", display: 'flex', justifyContent: "center"}}>
            <Pagination count={10} />
        </div>
        </div>
      </>
    )
}
