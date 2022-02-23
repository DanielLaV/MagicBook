import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../store/comments";

function EditCommentForm({ setShowModal, comment }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id);
  const [content, setContent] = useState(comment.content);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  // useEffect(() => {
  //   dispatch(commentActions.getOneComment(comment.id))
  // }, [dispatch, comment.id])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      user_id: userId,
      content,
      post_id: comment.post_id,
      commentId: comment.id,

    }
    return dispatch(commentActions.editComment(payload))
      .then(
        (response) => {
          if (response.errors) {
            setErrors(response.errors)
            console.log('=======ERRORS', errors)
            return
          }
          setSuccess("Your comment was edited!");
          setTimeout(() => {
            setShowModal(false);
          }, 850);
        }
      );
  };

  return (
    <div className='formView'>
        <div className="editCommentForm">
          <h2 style={{ color: "green" }}>
            {success}
          </h2>
          <ul className="error-list">
            {errors.map((error, idx) => (
              <li key={idx} className="errors">{error}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="form">
            <div className="text-container">
              <input
                id="content"
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
                Submit
              </button>
              <button
                type="button"
                className="form-button"
                onClick={(e) => {
                  setShowModal(false);
                  setContent(comment.content);
                }}>
                Cancel
              </button>
            </div>
          </form>
      </div>
      </div>

        );
}

        export default EditCommentForm;
