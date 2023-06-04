import React from 'react'
import Modal from 'react-awesome-modal'
import "../assets/css/ResourceModalCSS.css"
const ResourcePageModal = ({openmodal,setopenmodal}) => {
  return (
    <Modal
        visible={openmodal}
        width="700"
        height="400"
        effect="fadeInUp"
        onClickAway={() => setopenmodal(false)}
    >
        <div className='ResourceModalContainer'>
          <div className="ResourceModalHeading">
            <h1>Add Resources</h1>
          </div>
          <div className="ResourceName">
            <label >Resource Name</label>
            <input type="text" />
          </div>
          <div className="ResourcePdf">
            <label >Resource Pdf</label>
            <input type="file" />
          </div>
          <div className="ResourceLinks">
            <label >Lectures Link</label>
            <input type="text"/>
          </div>
          <div className="ResourceOfficialDocs">
            <label >Official Doc</label>
            <input type="text" />
          </div>
          <div className="ResourceSubmit">
            <input type="submit" />
          </div>
        </div>

    </Modal>
  )
}

export default ResourcePageModal