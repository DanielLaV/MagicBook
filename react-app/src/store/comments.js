const LOAD = 'studybuddy/comment/LOAD'
const ADD_COMMENT = 'studybuddy/comment/ADD_COMMENT'
const DELETE_COMMENT = 'studybuddy/comment/DELETE_COMMENT'
const DELETE_POST_COMMENTS = 'studybuddy/comments/DELETE_POST_COMMENTS'

const load = comments => ({
    type: LOAD,
    comments: comments.comments
});


const addOneComment = comment => ({
    type: ADD_COMMENT,
    comment
});

const deleteOneComment = comment => ({
    type: DELETE_COMMENT,
    comment
});


export const createComment = (payload) => async (dispatch) => {
    const response = await fetch("/api/comments/", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    const comment = await response.json();
    if (response.ok) {
        dispatch(addOneComment(comment));
    }
    return comment
}


export const getPostComments = (postId) => async (dispatch) => {
    const response = await fetch(`/api/posts/${postId}/comments/`, {
        headers: { "Content-Type": "application/json" }
    });
    const comments = await response.json();
    if (response.ok) {
        dispatch(load(comments));
    }
    return comments;
}

export const getComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments`, {
        headers: { "Content-Type": "application/json" }
    });
    const comments = await response.json();
    if (response.ok) {
        dispatch(load(comments));
    }
    return comments;
}


export const getOneComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const comment = await response.json();
    if (response.ok) {
        dispatch(addOneComment(comment));
    }
    return comment;
}
export const editComment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/${payload.commentId}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

    const comment = await response.json();
    if (response.ok) {
        dispatch(addOneComment(comment));
    }
    return comment;
}


export const deleteComment = (payload) => async (dispatch) => {
    const getCurrComment = await fetch(`/api/comments/${payload.comment_id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (getCurrComment.ok) {
        const delComment = await fetch(`/api/comments/${payload.comment_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'DELETE',
                body: JSON.stringify(payload)
            });
        if (delComment.ok) {
            const comment = await getCurrComment.json();
            dispatch(deleteOneComment(comment));
            return comment;
        }
        else return delComment.json();
    }
    else return getCurrComment.json();
}

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            const allComments = {};
            action.comments.forEach((comment) => {
                allComments[comment.id] = comment;
            });
            return { ...allComments }
        }
        case ADD_COMMENT: {
            const newComment = { ...state };
            newComment[action.comment.id] = action.comment
            return newComment
        }
        case DELETE_COMMENT: {
            const allComments = { ...state };
            delete allComments[action.comment.id];
            return allComments;
        }
        case DELETE_POST_COMMENTS: {
            const allComments = { ...state };
            action.comments.forEach((comment) => {
                delete allComments[comment.id];
            });
            return allComments;
        }
        default: return state;
    }
}

export default commentsReducer
