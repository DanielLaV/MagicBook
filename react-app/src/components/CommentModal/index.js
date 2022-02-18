import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentList from './CommentList';
import './CommentModal.css'

function CommentListModal({ post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='commentModalWrapper' onClick={() => setShowModal(true)}>
            <button className='seeComments'>Comments</button>
            {showModal && (
                <Modal className="commentModal" onClose={() => setShowModal(false)}>
                    <CommentList setShowModal={setShowModal} post={post} />
                </Modal>
            )}
        </div>
    )
}

export default CommentListModal;
