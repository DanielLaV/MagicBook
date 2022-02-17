import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePostForm from './DeletePostForm';
import Cauldron from '../../assets/cauldron.svg';


function DeletePostFormModal({ post }) {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <input type="image" className='cauldron' src={Cauldron} alt="delete button" onClick={onSubmit} to="#" ></input>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeletePostForm payload={setShowModal} post={post} />
        </Modal>
      )}
    </>
  );
}

export default DeletePostFormModal;
