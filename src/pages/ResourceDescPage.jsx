import React, { useState } from 'react'
import '../assets/css/ResourceDescPageCSS.css'
import ReactPic from '../assets/images/react_img.png'
import { GrAdd } from 'react-icons/gr'
import ResourcePageModal from '../components/ResourcePageModal'

const ResourceDescPage = () => {
  const [selectedItem, setselectedItem] = useState('resourceLecture');

  const handleClick = (resourceItem) => {
    setselectedItem(resourceItem);
  };

  const [openmodal, setopenmodal] = useState('');
  return (
    <div>
      <ResourcePageModal openmodal={openmodal} setopenmodal={setopenmodal}/>
    <div className='ResourcePageDesc_Conatiner'>

      <div className="ResDesc">
      <button onClick={() =>{
            setopenmodal(!openmodal);
          }} > <GrAdd/> Add Resources</button>
        <h1>React Resources</h1>
        <img src={ReactPic} alt="" />

      </div>
      <ul className="ResDescBar">
        <li className={selectedItem === 'resourceLecture' ? 'active' : ''} onClick={() => handleClick('resourceLecture')}
        >
          lectures
        </li>
        <li className={selectedItem === 'resourcePDF' ? 'active' : ''} onClick={() => handleClick('resourcePDF')}
        >
          PDFs
        </li>
        <li className={selectedItem === 'resourceDocs' ? 'active' : ''} onClick={() => handleClick('resourceDocs')}>
          Official Docs
        </li>
      </ul>
      <div className="ResourceOutContainer">
        {selectedItem === 'resourceLecture' && <div className="content-item">
          <div className="LecturesBlock">
            <span className='lecture-icon'></span>
            <a href="https://www.youtube.com/">Introduction</a> 
            <span className='lecture-icon'></span>
            <a href="https://www.youtube.com/">Beginner knowledge</a>
            <span className='lecture-icon'></span>
            <a href="https://www.youtube.com/">Intermediate knowledge</a>
            <span className='lecture-icon'></span>
            <a href="https://www.youtube.com/">Professional Knowledge</a>
          </div>
          <button className='addResourcesButton'>Add Lectures</button>
        </div>}
        {selectedItem === 'resourcePDF' && <div className="content-item">
          
          <button className='addResourcesButton'>Add PDF</button>
        </div>}
        {selectedItem === 'resourceDocs' && <div className="content-item">
          <button className='addResourcesButton'>Add Docs</button>
        </div>}
      </div>
    </div>
    </div>
  )
}

export default ResourceDescPage