import './PostsPage.css'
import { useSelector } from 'react-redux';
import DeletePostModal from '../DeletePostModal';
import EditPostFormModal from '../EditPostModal';
import CommentList from '../CommentList';
import AddCommentForm from '../AddCommentForm';



function Post({ post }) {

    const user = useSelector(state => state.session.user);
    const postOwner = post.user;
    const isOwner = +postOwner.id === +user.id;
    // const [theme, setTheme] = useState("");




    return (
        <div className="postContainer">
            <div className='postHeader'>
                <img className='postUserPic' src={postOwner.pic} alt="User profile"></img>
                <p className='postUserName'>{postOwner.username}</p>
            </div>
            <p className='postContent'>{post.content}</p>
            {isOwner && <div className='form-buttons'>
                <DeletePostModal post={post} />
                <EditPostFormModal post={post} />
            </div>
            }
            <div className='commentSection'>
                <CommentList post={post} />
                <AddCommentForm post={post} />
            </div>
        </div>
    )
}

export default Post;
