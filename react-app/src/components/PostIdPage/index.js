import './PostIdPage.css';
import { useEffect } from 'react';
import * as postActions from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from '../PostsPage/Post';

function PostIdPage() {
    console.log('in postsid')
    const dispatch = useDispatch();
    const { postId } = useParams();
    const user = useSelector((state) => state.session.user.id);
    const post = useSelector((state) => state.posts[postId]);

    useEffect(
        () => {
            dispatch(postActions.getOnePost(postId));

            return () => {
                dispatch(postActions.getOnePost(postId));
            };
        },
        [dispatch, postId]
    );

    if (post) {
        return (
            <div className='browsePosts' id='postIdPage'>
                <Post post={post} />
            </div>
        )
    } else return 'Error: This post does not exist';
}

export default PostIdPage;
