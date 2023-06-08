import React from 'react'
import Modal from "react-awesome-modal";

const EditProfileModal = ({ openmodal, setopenmodal, projid }) => {
  return (
    <Modal
            visible={openmodal}
            width="700"
            height="530"
            effect="fadeInUp"
            onClickAway={() => setopenmodal(false)}
    >
    <div>EditProfileModal</div>
    </Modal>
  )
}

export default EditProfileModal