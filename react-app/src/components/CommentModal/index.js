import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentBody from './CommentBody';
import Comment from "../Comment";
import './CommentModal.css'

function CommentBodyModal({comment}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='eachComment' onClick={() => setShowModal(true)}><div className='texter'><Comment comment={comment} /></div></div>
            {showModal && (
                <Modal className="commentP" onClose={() => setShowModal(false)}>
                    <CommentBody setShowModal={setShowModal} commentId={comment.id}/>
                </Modal>
            )}
        </>
    )
}

export default CommentBodyModal;
