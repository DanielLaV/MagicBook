import './EditPostForm.css';
import { useState } from 'react';
import * as postActions from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';

function EditPostForm({ setShowModal, post }) {
	const dispatch = useDispatch();
	const [ content, setContent ] = useState(post.content);
	const [ errors, setErrors ] = useState([]);
	const user_id = useSelector((state) => state.session.user.id);
    const [ , setSuccess] = useState("");
    console.log('===========POST', post)


	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors([]);
		const newPost = {
			id: post.id,
			content,
			user_id
		};

		return dispatch(postActions.editPost(newPost))
            .then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                }
            );
    };

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>

				<label className="editPostTitle">Post</label>
				<textarea
					type="text"
					value={content}
					className="input"
					onChange={(e) => setContent(e.target.value)}
				/>

				<div className="form-button-container">
					<button className="form-button">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default EditPostForm;
