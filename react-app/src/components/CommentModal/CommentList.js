import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as commentActions from "../../store/comments"
import EditCommentFormModal from "../EditCommentFormModal";
import DeleteCommentFormModal from "../DeleteCommentFormModal";


const CommentList = ({ setShowModal, post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => Object.keys(state.comments));

    useEffect(() => {
        dispatch(commentActions.getPostComments(post.id));
    }, [dispatch, post])


    return (
        <div className="comments">

        </div>)
}

export default CommentList;
