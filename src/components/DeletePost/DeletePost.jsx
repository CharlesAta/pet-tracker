import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./DeletePost.css";

export default function DeletePost(props) {

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          let jwt = localStorage.getItem("token");
          let fetchResponse = await fetch(`/api/posts/${props.user._id}/${props.post._id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + jwt,
            },
          });
          props.setUpdateDelete(true)
          props.closeModal()
          await fetchResponse.json();

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <Modal.Header closeButton>Delete This Post</Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this post?
            </Modal.Body>
            <Modal.Footer>
            <Button type="submit" variant="secondary"className="delete-button" onClick={(e) => handleSubmit(e)} >
                Delete Post
            </Button>
            </Modal.Footer>
        </div>
    )
}
