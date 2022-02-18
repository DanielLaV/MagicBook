const LOAD_POSTS = 'LOAD_POSTS';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';


/* ----- ACTIONS ----- */
export const loadPosts = posts => {
    return {
        type: LOAD_POSTS,
        payload: posts,
    }
};

export const addNewPost = newPost => {
    return {
        type: ADD_POST,
        payload: newPost
    }
}

export const deleteOnePost = post => {
    return {
        type: DELETE_POST,
        payload: post
    }
}

/* ----- SELECTORS / THUNKS ----- */
export const getPosts = () => async (dispatch) => {
    const res = await fetch('/api/posts/');
    const data = await res.json();
    if (res.ok) {
        dispatch(loadPosts(data.posts));
        return res;
    }
    else return "Error"
}

export const getOnePost = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`, {
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewPost(data))
    }
    return data;
}

export const addPost = (newPost) => async (dispatch) => {

    const res = await fetch('/api/posts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    })
    const data = await res.json();
    if (res.ok) {
        return dispatch(addNewPost(data));
    }
    else return data
}

export const editPost = post => async (dispatch) => {
    const res = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewPost(data));
    }
    return data;
}

export const deletePost = commit => async (dispatch) => {
    const currPost = await fetch(`/api/posts/${commit.post_id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (currPost.ok) {
        const delPost = await fetch(`/api/posts/${commit.post_id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'DELETE',
                body: JSON.stringify(commit)
            });
        if (delPost.ok) {
            const post = await currPost.json();
            dispatch(deleteOnePost(post));
            return post;
        }
        else return delPost;
    }
    else return currPost;
}


/* ----- REDUCER ------ */
const initialState = {};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS: {
            const newState = {};
            action.payload.forEach((post) => {
                newState[post.id] = post;
            })
            return newState;
        }
        case ADD_POST: {
            const newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_POST: {
            const newState = Object.assign({}, state);
            delete newState[action.payload.id];
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default postsReducer;
