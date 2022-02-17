import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteCommentForm from './DeleteCommentForm';
import '../Comment/comment.css'
import Cauldron from '../../assets/cauldron.png'

function DeleteCommentFormModal({comment}) {
  const [showModal, setShowModal] = useState(false);

  const onSubmit = e => {
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <input type="image" className='cauldronComment' src={Cauldron} alt="text" onClick={onSubmit} to="#" ></input>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentForm setShowModal={setShowModal} comment={comment}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentFormModal;
