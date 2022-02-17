import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as commentActions from "../../store/comments"
import EditCommentFormModal from "../EditCommentFormModal";
import DeleteCommentFormModal from "../DeleteCommentFormModal";


const CommentBody = ({ setShowModal, commentId }) => {
    const { deckId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const comment = useSelector(state => state.comments[commentId]);
    const deck = useSelector(state => state.decks[deckId]);

    useEffect(() => {
        dispatch(commentActions.getOneComment(commentId));
    }, [dispatch, commentId])

    const modals = (<><EditCommentFormModal comment={comment} />
        <DeleteCommentFormModal comment={comment} /></>)

    const buttonDiv =
        (<div className="buttons">
            <button
                type="button"
                onClick={(e) => setShowModal(false)} className="form-button">
                Close
            </button>
            {(user.id === deck.user_id) && modals}
        </div>)

    return (
        <div className="preview">
            <div className="form-container">
                <p className="side">Front:</p>
                <div>
                    <div className="preview-text"><div className="texter">{comment.front}</div></div>
                </div>
                <p className="side">Back:</p>
                <div>
                    <div className="preview-text"><div className="texter">{comment.back}</div></div>
                </div>
            </div>
            <div className="form-button-container">
                {buttonDiv}
            </div>
        </div>)
}

export default CommentBody
