import React from 'react'
import Modal from 'react-awesome-modal'
const ResourcePageModal = ({openmodal,setopenmodal}) => {
  return (
    <Modal
        visible={openmodal}
        width="700"
        height="400"
        effect="fadeInUp"
        onClickAway={() => setopenmodal(false)}
    >
        <div>
            <h1>
                amamamam
            </h1>
        </div>
    </Modal>
  )
}

export default ResourcePageModal