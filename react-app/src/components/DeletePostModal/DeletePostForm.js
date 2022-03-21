import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as postActions from "../../store/posts";
import { useHistory } from 'react-router-dom';
import '../EditPostModal/EditPostForm.css';




function DeletePostForm({ payload, post }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const setShowModal = payload;
    const [, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const currUserId = useSelector(state => state.session.user.id);

    const currUserPostId = useSelector(state => state?.posts[post.id]?.user_id);



    const submitDelete = (e) => {
        setErrors([]);
        const confirm = {
            post_id: post.id,
            curr_user_id: currUserId,
            post_user_id: currUserPostId
        }

        return dispatch(postActions.deletePost(confirm))
            .then(
                response => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Your post was deleted");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 800);
                    history.push('/posts')
                }
            )
    }

    return (
        <div className='deletePost'>
            <h2>Are you sure you want to delete this post?</h2>
            <h3 style={{ color: "black" }} >This cannot be undone.</h3>
            <div className="buttonContainer">
                <button className="deleteButton" type="button" onClick={(e) => submitDelete()}>Yes</button>
                <button className="cancelButton" type="button" onClick={(e) => setShowModal(false)}>No</button>
            </div>
            <h2 style={{ color: "green" }}>{success}</h2>
        </div>)
}

export default DeletePostForm
