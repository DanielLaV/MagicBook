import './PostsPage.css'
import { useSelector } from 'react-redux';
import DeletePostModal from '../DeletePostModal';
import EditPostFormModal from '../EditPostModal';


function Post({ post }) {

    const user = useSelector(state => state.session.user.id);
    const postOwner = post.user_id;
    const isOwner = +postOwner === +user;


    return (
        <div className="singlePost">
            <p className='content'>{post.content}</p>
            {isOwner && <div className='form-buttons'>
                <DeletePostModal post={post} />
                <EditPostFormModal post={post} />
            </div>
            }
        </div>
    )
}

export default Post;
