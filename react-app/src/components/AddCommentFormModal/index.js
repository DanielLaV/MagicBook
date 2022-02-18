import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCommentForm from './AddCommentForm';

function AddCommentFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='addCommentButton'>Add Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCommentForm payload={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddCommentFormModal;
