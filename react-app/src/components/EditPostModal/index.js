import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPostForm from './EditPostForm';
import './EditPostForm.css';
import Feather from '../../assets/feather.png'



function EditPostFormModal({ post }) {
    const [showModal, setShowModal] = useState(false);

// Need to pass the current post into the EditPostForm
    return (
        <>
            <input type="image" name="<Name of the image button >" className='feather'
                src={Feather} alt="text" onClick={() => setShowModal(true)}></input>


            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPostForm setShowModal={setShowModal} post={post} />
                </Modal>
            )}
        </>
    )
}

export default EditPostFormModal;
