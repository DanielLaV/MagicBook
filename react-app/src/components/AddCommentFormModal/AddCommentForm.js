import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../store/comments";
import { useParams } from "react-router-dom";
import './AddCommentForm.css';

function AddCommentForm({ payload, post }) {
  const dispatch = useDispatch();
  const user_id = useSelector(state => state.session.user.id);
  const setShowModal = payload
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      content,
      user_id,
      post_id: +post.id
    }
    return dispatch(commentActions.createComment(payload))
      .then(
        (response) => {
          if (response.errors) {
            setErrors(response.errors)
            return
          }
          setSuccess("Be kind in your comments!");
          setTimeout(() => {
            setShowModal(false);
          }, 850);
        }
      );
  };

  return (

    <div className='formView'>

      <div className="form-container">
        <h2 style={{ color: "green" }}>
          {success}
        </h2>
      </div>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx} className="errors">{error}</li>
        ))}
      </ul>
      <form className='form' onSubmit={handleSubmit}>
        <div className="text-container">
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Write a comment..."
            className="input"
          />
        </div>
        <div className="form-button-container">
          <button
            type="submit"
            className="form-button">
            Add Comment
          </button>
          <button
            type="button"
            className="form-button"
            onClick={() => {
              setShowModal(false);
              setContent("");
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCommentForm;
