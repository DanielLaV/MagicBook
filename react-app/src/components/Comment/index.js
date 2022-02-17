import './comment.css'


function Comment({ comment }) {


    if (comment) {
        return (
            <div className="frontCommentDisplay">
                {comment.front}
            </div>
        )
    }
}

export default Comment;
