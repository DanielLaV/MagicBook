const GET_USER = 'GET_USER';



/* ----- ACTIONS ----- */
export const loadUser = user => {
    return {
        type: GET_USER,
        payload: user
    }
}


/* ----- SELECTORS / THUNKS ----- */
export const getUser = id => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/`, {
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewPost(data))
    }
    return data;
}


/* ----- REDUCER ------ */
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER: {
            const newState = {};
            action.payload.forEach((user) => {
                newState[user.id] = user;
            })
            return newState;
        }
    }
};

export default usersReducer;
