import React from 'react'
import "./PetList.css";
import PetListItem from "../PetListItem/PetListItem";

export default function PetList(props) {
  
    return (
      <div >
        {props.posts.map(post =>
          <PetListItem post={post}/>)}
      </div>
    )
}
