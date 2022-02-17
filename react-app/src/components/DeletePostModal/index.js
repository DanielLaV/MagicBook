import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePostForm from './DeletePostForm';
import Trash from '../../assets/trash.png';


function DeletePostFormModal({ post }) {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <input type="image" className='trash' src={Trash} alt="delete button" onClick={onSubmit} to="#" ></input>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePostForm payload={setShowModal} post={post} />
        </Modal>
      )}
    </>
  );
}

export default DeletePostFormModal;
