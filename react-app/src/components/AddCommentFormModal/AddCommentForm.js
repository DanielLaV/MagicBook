import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as commentActions from "../../store/comments";
import { useParams } from "react-router-dom";
import './AddCommentForm.css';

function AddCommentForm({ payload }) {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const setShowModal = payload
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const payload = {
      front,
      back,
      post_id: +postId
    }
    return dispatch(commentActions.createComment(payload))
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

    <div className='formView'>
      <div className="preview">

    <div className="form-container">
      <h2 style={{color:"green"}}>
        {success}
      </h2>
        <h2 className="preview-title">Preview</h2>
        <p className="side">Front:</p>
        <div>

        <div className="preview-text"><div className="texter">{front}</div></div>
        </div>
        <p className="side">Back:</p>
        <div>

        <div className="preview-text"><div className="texter">{back}</div></div>
        </div>
      </div>
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx} className="errors">{error}</li>
        ))}
      </ul>
      <form className='form' onSubmit={handleSubmit}>
        <div className="text-container">
          <textarea
            id="front"
            type="text"
            value={front}
            onChange={(e) => setFront(e.target.value)}
            required
            placeholder="Enter what you want to appear on the front of the comment. The front can be something like a question, concept, or vocabulary word."
            className="input"
          />
          <textarea
            id="back"
            type="text"
            value={back}
            onChange={(e) => setBack(e.target.value)}
            required
            placeholder="Enter what you want to appear on the back of the comment. This would be the answer or response to the prompt on the front of the comment."
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
            onClick={(e) => {
              setShowModal(false);
              setFront("");
              setBack("");
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddCommentForm;
