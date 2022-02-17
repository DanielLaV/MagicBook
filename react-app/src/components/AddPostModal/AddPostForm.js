import { useState } from 'react';
import * as postActions from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';

function AddPostForm({ setShowModal }) {
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
                    setSuccess("Post added!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 800);
                }
            );
    };

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
            <h2 style={{color:"green", marginBottom:"-20px"}}>{success}</h2>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='form'>
                <h1>Add Post</h1>
                </label>
                <label>
                </label>
                <input
                    type='text'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder='Your post here'
                    className='input'
                />

                <div className='form-button-container'>
                    <button className='form-button'>Add Post</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostForm;
