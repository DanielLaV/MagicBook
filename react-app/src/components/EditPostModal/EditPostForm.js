import './EditPostForm.css';
import { useState } from 'react';
import * as postActions from '../../store/posts';
import { useDispatch, useSelector } from 'react-redux';

function EditPostForm({ setShowModal, post }) {
	const dispatch = useDispatch();
	const [ title, setTitle ] = useState(post.title);
	const [ description, setDescription ] = useState(post.description);
	const [ errors, setErrors ] = useState([]);
	const user_id = useSelector((state) => state.session.user.id);
    const [success, setSuccess] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors([]);
		const newPost = {
			id: post.id,
			title,
			description,
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
				<label className="input">Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
					className="input"
				/>

				<label className="input">Description</label>
				<input
					type="text"
					value={description}
					className="input"
					onChange={(e) => setDescription(e.target.value)}
				/>

				<div className="form-button-container">
					<button className="form-button">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default EditPostForm;
