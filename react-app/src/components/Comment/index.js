import DeleteCommentFormModal from '../DeleteCommentFormModal';
import EditCommentFormModal from '../EditCommentFormModal';
import { useSelector } from 'react-redux';



function Comment({ comment }) {
    const commenter = comment.user;
    const userId = useSelector(state => state?.session?.user?.id);
    const showButtons = +userId === +commenter.id;


    if (comment) {
        return (
            <div className='commentWrapper'>
                <div className='commenterWrapper'>
                    <img className='commenterPic' src={commenter.pic} alt='Commenter'></img>

                    <div className='commenterName'>
                        {commenter.username}
                    </div>
                </div>
                <div className="commentContent">
                    {comment.content}
                    {showButtons &&
                        <div className='crudButtons'>
                            <DeleteCommentFormModal comment={comment} />
                            <EditCommentFormModal comment={comment} />
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default Comment;
