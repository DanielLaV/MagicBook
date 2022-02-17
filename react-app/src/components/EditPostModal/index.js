import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPostForm from './EditPostForm';
import './EditPostForm.css';
import Pencil from '../../assets/pencil2.png'



function EditPostFormModal({ post }) {
    const [showModal, setShowModal] = useState(false);

// Need to pass the current post into the EditPostForm
    return (
        <>
            {/* <button className='editPostButton' onClick={() => setShowModal(true)}>Edit Post</button> */}


            <input type="image" name="<Name of the image button >" className='pencil'
                src={Pencil} alt="text" onClick={() => setShowModal(true)}></input>


            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPostForm setShowModal={setShowModal} post={post} />
                </Modal>
            )}
        </>
    )
}

export default EditPostFormModal;
