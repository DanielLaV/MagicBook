import React from "react";
import { useSelector } from "react-redux";
import Comment from '../Comment';


const CommentList = ({ post }) => {

    const postComments = useSelector(state => Object.values(state?.comments).filter(comment => {
        return comment.post_id === post.id;
    }));


    return (
        <div className="commentsContainer">
            {postComments?.map((comment) => (
                <div className="singleCommentContainer" key={comment.id}>
                    <Comment comment={comment} />
                </div>
            ))}
        </div>)
}

export default CommentList;
