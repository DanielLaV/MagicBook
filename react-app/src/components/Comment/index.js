import './comment.css'


function Comment({ comment }) {


    if (comment) {
        console.log('====== inside COMMENT')
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
