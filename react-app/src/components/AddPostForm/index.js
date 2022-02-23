import './AddPostForm.css';
import { useState } from 'react';
import * as postActions from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';

function AddPostForm() {
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newPost = {
            content,
            user_id
        }

        return dispatch(postActions.addPost(newPost))
            .then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setTimeout(() => {
                        setSuccess("Post added!");
                    }, 800);
                }
            );
    };

    return (
        <div id="addPostFormContainer" className="form-container">
            <form className='addPostForm' onSubmit={handleSubmit}>
                <h2 style={{ color: "green", marginBottom: "-20px" }}>{success}</h2>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='form'>
                    <h1>New Post</h1>
                </label>
                <label>
                </label>
                <textarea
                    type='text'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className='middleInput'
                    id="addPostTextarea"
                />

                <div className='form-button-container'>
                    <button className='form-button'>Add Post</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm;
