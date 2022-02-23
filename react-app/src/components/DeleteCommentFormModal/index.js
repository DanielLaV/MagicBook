import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteCommentForm from './DeleteCommentForm';
import Cauldron from '../../assets/cauldron.svg';

function DeleteCommentFormModal({comment}) {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = e => {
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <input type="image" className='cauldron' src={Cauldron} alt="text" onClick={onSubmit} to="#" ></input>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentForm setShowModal={setShowModal} comment={comment}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentFormModal;
