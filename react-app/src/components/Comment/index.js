import './comment.css';
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
                <div className='commentOwner'>
                    {commenter.username}
                </div>
                <div className="commentContent">
                    {comment.content}
                </div>
                {showButtons &&
                    <div className='crudButtons'>
                        <EditCommentFormModal comment={comment} />
                        <DeleteCommentFormModal comment={comment} />
                    </div>
                }

            </div>
        )
    }
}

export default Comment;
