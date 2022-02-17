import './PostsPage.css';
import { useEffect } from 'react';
import * as postActions from "../../store/posts";
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post.js';
import AddPostFormModal from '../AddPostModal';



function PostsPage() {
    const posts = useSelector(state => Object.values(state.posts));
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getPosts());
    }, [dispatch, userId]);

    return (
        <div className='browsePageContainer'>
            <div className="browsePosts">
                <div className="browsePostsContainer">
                    <h1 className="browsePostsTitle">Your Feed</h1>
                </div>
                <div className='postsDisplay'>
                    <div className='allPosts'>
                        {posts?.map(post =>
                            <div className="eachPost" key={post.id}>
                         		<Post post={post} />
                            </div>)}
                    </div>
                </div>
                <div className='addPostButtonContainer'>
                    <AddPostFormModal />
                </div>
            </div>
        </div>
    )
}

export default PostsPage;
