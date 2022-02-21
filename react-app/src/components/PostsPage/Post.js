import './PostsPage.css'
import { useSelector } from 'react-redux';
import DeletePostModal from '../DeletePostModal';
import EditPostFormModal from '../EditPostModal';
import CommentList from '../CommentList';
import AddCommentForm from '../AddCommentForm';


function Post({ post }) {

    const user = useSelector(state => state.session.user);
    const postOwner = post.user_id;
    const isOwner = +postOwner === +user.id;


    return (
        <div className="singlePost">
            <img className='postUserPic' src={user.pic}></img>
            <p className='content'>{post.content}</p>
            {isOwner && <div className='form-buttons'>
                <DeletePostModal post={post} />
                <EditPostFormModal post={post} />
            </div>
            }
            <div>
                <CommentList post={post} />
                <AddCommentForm post={post} />
            </div>
        </div>
    )
}

export default Post;
