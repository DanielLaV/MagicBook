import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';
import '../Comment/comment.css'
import Feather from '../../assets/feather2.png'

function EditCommentFormModal({comment}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <input type="image" name="<Name of the image button >" className='feather'
                src={Feather} alt="text" onClick={() => setShowModal(true)}></input>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCommentForm setShowModal={setShowModal} comment={comment}/>
        </Modal>
      )}
    </>
  );
}

export default EditCommentFormModal;
