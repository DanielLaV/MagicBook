import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from '../Comment';


const CommentList = ({ post }) => {

    // const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user);
    // const comments = useSelector(state => Object.entries(state?.comments).filter(x => x.post_id === post.id));
    const postComments = useSelector(state => Object.values(state?.comments).filter(comment => {
        return comment.post_id === post.id;
    }));

    // console.log('COMMENTS IS ', allComments, typeof allComments)

    // let postComments = allComments.filter(comment => {
    //     return comment.post_id === post.id;
    // })

    // console.log('COMMs IS ', postComments, typeof postComments)
    // useEffect(() => {
    //     console.log('========in comment list')
    //     dispatch(commentActions.getPostComments(post.id));
    // }, [dispatch, post])


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
