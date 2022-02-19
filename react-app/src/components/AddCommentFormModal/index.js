import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddCommentForm from './AddCommentForm';

function AddCommentFormModal({ post }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='addCommentButton'>Add Comment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddCommentForm payload={setShowModal} post={post} />
        </Modal>
      )}
    </>
  );
}

export default AddCommentFormModal;
