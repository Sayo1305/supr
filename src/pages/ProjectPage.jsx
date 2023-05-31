import React from 'react'
import '../assets/css/ProjectPage.css'
import card4 from '../assets/images/card4.jpg'
import { AiOutlinePlus } from "react-icons/ai";
import {MdOutlinePeopleOutline} from "react-icons/md"
import { useNavigate} from "react-router-dom";

const ProjectPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="projecthero">
                <div className="projectheading">
                    <div className="header">
                        <span id='projspan1'>Project Help<br /></span>
                        <span id='projspan2'>Work with top community members to bring your ideas to life.</span>
                    </div>
                    <div><button className='addbtn'><AiOutlinePlus />Create Post</button></div>
                </div>
                <div className="recentposts">
                    <span id='postheading'>Recent Posts</span>
                    <div className="cardscontainer">
                        <div className="projectcard">
                            <img src={card4} alt="image" />
                            <div className="cardcontent">
                                <span id='cardspan1'>Project Name</span>
                                <div className='technologies'>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                </div>
                                <p id='cardspan3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis maxime voluptatum...</p>
                                <div className='viewers'>
                                    <button id='contributebtn' onClick={() => {navigate('/desc')}}>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30}/></span>
                                </div>
                            </div>
                        </div>
                        <div className="projectcard">
                            <img src={card4} alt="image" />
                            <div className="cardcontent">
                                <span id='cardspan1'>Project Name</span>
                                <div className='technologies'>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                </div>
                                <p id='cardspan3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis maxime voluptatum...</p>
                                <div className='viewers'>
                                    <button id='contributebtn'>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30}/></span>
                                </div>
                            </div>
                        </div>
                        <div className="projectcard">
                            <img src={card4} alt="image" />
                            <div className="cardcontent">
                                <span id='cardspan1'>Project Name</span>
                                <div className='technologies'>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                </div>
                                <p id='cardspan3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis maxime voluptatum...</p>
                                <div className='viewers'>
                                    <button id='contributebtn'>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30}/></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="allpost">
                    <div className="allcard">
                    {/* <img src={card4} alt="image" /> */}
                            <div className="cardcontent cardcontentdark">
                                <span id='cardspan1'>Project Name</span>
                                <div className='technologies technologiesdark'>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                </div>
                                <p id='cardspan3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis maxime voluptatum...</p>
                                <div className='viewers viewersdark'>
                                    <button id='contributebtndark' className='btndark'>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30}/></span>
                                </div>
                            </div>
                    </div>
                    <div className="allcard">
                    {/* <img src={card4} alt="image" /> */}
                            <div className="cardcontent cardcontentdark">
                                <span id='cardspan1'>Project Name</span>
                                <div className='technologies technologiesdark'>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                </div>
                                <p id='cardspan3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis maxime voluptatum...</p>
                                <div className='viewers viewersdark'>
                                    <button id='contributebtndark' className='btndark'>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30}/></span>
                                </div>
                            </div>
                    </div>
                    <div className="allcard">
                    {/* <img src={card4} alt="image" /> */}
                            <div className="cardcontent cardcontentdark">
                                <span id='cardspan1'>Project Name</span>
                                <div className='technologies technologiesdark'>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>HTML</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                    <span>javascript</span>
                                </div>
                                <p id='cardspan3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis maxime voluptatum...</p>
                                <div className='viewers viewersdark'>
                                    <button id='contributebtndark' className='btndark'>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30}/></span>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectPage