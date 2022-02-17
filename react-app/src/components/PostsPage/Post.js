import './PostsPage.css'
import { useSelector } from 'react-redux';


function Post({ post }) {

    // const user = useSelector(state => state.session.user.id)


    return (
        <div className="singlePost">
            <p className='content'>{post.content}</p>
        </div>
    )
}

export default Post;
