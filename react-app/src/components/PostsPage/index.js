import './PostsPage.css';
import { useEffect } from 'react';
import * as postActions from "../../store/posts";
import * as commentActions from "../../store/comments";
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post.js';
import AddPostForm from '../AddPostForm';



function PostsPage() {
    const posts = useSelector(state => Object.values(state.posts));
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getPosts());
        dispatch(commentActions.getComments());
    }, [dispatch, userId]);

    return (
        <div className='browsePageContainer'>
            <div className="browsePosts">
                <div className='addPostButtonContainer'>
                    <AddPostForm />
                </div>
                <div className="postsTitleContainer">
                    <h1 className="postsTitle">Your Feed</h1>
                </div>
                <div className='postsDisplay'>
                    <div className='allPosts'>
                        {posts?.map(post =>
                            <div className="eachPost" key={post.id}>
                                <Post post={post} />
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsPage;
