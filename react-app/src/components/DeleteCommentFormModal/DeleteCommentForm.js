import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as commentActions from "../../store/comments";

function DeleteCommentForm({ setShowModal, comment }) {
    const dispatch = useDispatch();

    const currUserId = useSelector(state => state.session?.user.id);
    const commentUserId = comment.user.id;
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState([]);

    const submitDelete = (e) => {
        e.preventDefault();
        setErrors([]);
        const payload = {
            comment_id: comment.id,
            curr_user_id: currUserId,
            comment_user_id: commentUserId,
        }
        return dispatch(commentActions.deleteComment(payload))
            .then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                }
            );
    };

    return (

    <div className="delete">

    <h2  >Are you sure you want to delete this comment?</h2>
        <h3 style={{color:"black"}}>This cannot be undone.</h3>
        <ul className="error-list">
            {errors.map((error, idx) => (
                <li key={idx} className="errors">{error}</li>
            ))}
        </ul>
        <form onSubmit={submitDelete}>
            <button type="submit" className="dark-button">Yes</button>
            <button type="button" onClick={(e) => setShowModal(false)} className="light-button">No</button>
        </form>
        <h2 style={{color:"green"}}>{success}</h2>
    </div>)
}

export default DeleteCommentForm
