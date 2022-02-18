import './comment.css';
import { useSelector } from 'react-redux';


function Comment({ comment }) {
    const commenter = comment.user.username;

    if (comment) {
        console.log('====== inside COMMENT', comment)
        return (
            <div className='commentWrapper'>
                <div className='commentOwner'>
                    {commenter}
                </div>
                <div className="commentContent">
                    {comment.content}
                </div>

            </div>
        )
    }
}

export default Comment;
