import './PostIdPage.css';
import { useEffect } from 'react';
import * as postActions from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import AddCardFormModal from '../AddCardFormModal';
// import CardBrowser from '../CardsBrowser';
import EditPostFormModal from '../EditPostModal';
import DeletePostFormModal from '../DeletePostModal';

function PostIdPage() {
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
        const isOwner = user === post?.user_id;
        return (
            <div key={post.id} className="postIdPage">
                <div className="postNameContainer">
                    <h1 className="post-title">{post.title}
                        {isOwner && (
                            <>
                                <EditPostFormModal post={post} />
                                <DeletePostFormModal post={post} />
                            </>
                        )}
                    </h1>
                    <div className="post-description">{post.description}</div>
                </div>
            </div>

        );
    } else return 'Error: This post does not exist';
}

export default PostIdPage;
