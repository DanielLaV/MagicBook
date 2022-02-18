import './comment.css';
import { useSelector } from 'react-redux';


function Comment({ comment }) {
    // const commenter = useSelector(state => Object.values(state?.session).filter(comment => {
    //     return comment.post_id === post.id;
    // }));

    if (comment) {
        console.log('====== inside COMMENT', comment)
        return (
            <div className='commentWrapper'>
                <div className='commentOwner'>
                    {comment.username}
                </div>
                <div className="commentContent">
                    {comment.content}
                </div>

            </div>
        )
    }
}

export default Comment;
