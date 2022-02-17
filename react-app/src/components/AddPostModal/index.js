import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddPostForm from './AddPostForm';



function AddPostFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='addPostButton' onClick={() => setShowModal(true)}>New Post</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddPostForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default AddPostFormModal;
