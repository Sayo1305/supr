import React from 'react'
import '../assets/css/resourcePageCSS.css'
import ReactPic from '../assets/images/react_img.png'
import searchPic from '../assets/images/searchimg.png'
import htmlcssjsPic from '../assets/images/html-css-js.png'
import nodePic from '../assets/images/nodejs_img.png'
import socketioPic from '../assets/images/Socketio_img.png'
import expressPic from '../assets/images/express_img.png'
import cPlusPlusPic from '../assets/images/C++logoPic.png'
import javaLogoPic from '../assets/images/JavaPic.png'

import {GrAdd} from 'react-icons/gr'

const ResourcePage = () => {
  return (
    <div className='ResourcePageContainer'>
      <div className="searchandaddcolumn">
        <div className="search_bar">
          <input type="search" placeholder='Search Courses' />
          <button ><img src={searchPic} alt="" /></button>
        </div>
        <div className="ResourceAdd">
          <button> <GrAdd/> Add Resources</button>
        </div>
      </div>
      <div className="ResourcePageAllCards">
        <div className="ResourcePageCard">
          <img src={htmlcssjsPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={nodePic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={socketioPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={expressPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={cPlusPlusPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={javaLogoPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={ReactPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
        <div className="ResourcePageCard">
          <img src={ReactPic} alt="" className='Resourcecardimg' />
          <div className="ResourcePageContent">
            <h1 className='ResourcePageTitle'>Learn React</h1>
            <p className='ResourcePageDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam esse ut deserunt atque ipsum nemo, natus eligendi numquam aliquam?</p>
            <div className='buttondiv'>
              <button className='ResourcePagebutton'>See lecture</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ResourcePage