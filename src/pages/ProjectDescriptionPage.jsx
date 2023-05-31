import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import '../assets/css/ProjectPage.css'
import { Link } from 'react-router-dom';

const ProjectDescriptionPage = () => {
    const [apply, setapply] = useState(false);
    return (
        <div>
            <div className={`${apply ? 'appform_focus' : 'appform'}`}>
                <div className="appcontainer">
                    <span id="cross" onClick={() => { setapply(current => !current) }}>
                        <AiOutlineClose style={{ color: '#fff', float: 'right' }} />
                    </span>
                    <span id='appspan1'>Apply to contribute in the project<br /></span>
                    <span id='appspan2'>Write an application message explaining how you will contributing to the project and how the problem will be solved including the approach.</span>
                    <div className="applicationContainer">
                        <span id='appsubheading'>Application Message</span>
                        <div className='appmsg appbox'>
                            <textarea name="message" placeholder="Enter Application message..."></textarea>
                        </div>
                        <div className="appgithubLinkContainer">
                            <span id='appsubheading'>Your Email</span>
                            <div className='appbox'>
                                <input type="email" name="user_email" placeholder="Enter your Email" required />
                            </div>
                        </div>
                        <div className="appgithubLinkContainer">
                            <span id='appsubheading'>Github Profile Link</span>
                            <div className='appbox'>
                                <input type="text" name="githublink" placeholder="Enter your github profile link" required />
                            </div>
                        </div>
                        <button className='appbtn'>Send Application</button>
                    </div>
                </div>
            </div>
            {!apply && (
                <div className="projecthero">
                    <div className="projectheading">
                        <div className="header">
                            <span id='projspan1'>Project Name<br /></span>
                            <span id='projspan2'>Work with top community members to bring your ideas to life.</span>
                        </div>
                        <div><button className='addbtn' onClick={() => { setapply(current => !current) }}><AiOutlinePlus />Contribute</button></div>
                    </div>
                    <div className="projectTechnologiesContainer">
                        <span id='projsubheading'>Technologies Used</span>
                        <div className='technologiesdesc'>
                            <span>HTML</span>
                            <span>javascript</span>
                            <span>HTML</span>
                            <span>javascript</span>
                            <span>javascript</span>
                            <span>javascript</span>
                        </div>
                    </div>
                    <div className="projectDescContainer">
                        <span id='projsubheading'>Project Description</span>
                        <div className='descbox'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corrupti sint consequatur voluptates eaque dicta ad placeat dolor magnam rerum, harum neque soluta? Est modi sequi, veniam veritatis accusamus adipisci.</p>
                        </div>
                    </div>
                    <div className="probstmtcontainer">
                        <span id='projsubheading'>Problem statement</span>
                        <div className='descbox'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corrupti sint consequatur voluptates eaque dicta ad placeat dolor magnam rerum, harum neque soluta? Est modi sequi, veniam veritatis accusamus adipisci.</p>
                        </div>
                    </div>
                    <div className="githubLinkContainer">
                        <span id='projsubheading'>Github Project Link</span>
                        <div className='linkbox'>
                            <Link to={'#'}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corrupti sint consequatur voluptates eaque dicta ad placeat dolor magnam rerum, harum neque soluta? Est modi sequi, veniam veritatis accusamus adipisci.</p></Link>
                        </div>
                    </div>
                </div>
            )}
            {apply && (
                <div className="projecthero opacity">
                    <div className="projectheading">
                        <div className="header">
                            <span id='projspan1'>Project Name<br /></span>
                            <span id='projspan2'>Work with top community members to bring your ideas to life.</span>
                        </div>
                        <div><button className='addbtn' onClick={() => { setapply(current => !current) }}><AiOutlinePlus />Contribute</button></div>
                    </div>
                    <div className="projectTechnologiesContainer">
                        <span id='projsubheading'>Technologies Used</span>
                        <div className='technologiesdesc'>
                            <span>HTML</span>
                            <span>javascript</span>
                            <span>HTML</span>
                            <span>javascript</span>
                            <span>javascript</span>
                            <span>javascript</span>
                        </div>
                    </div>
                    <div className="projectDescContainer">
                        <span id='projsubheading'>Project Description</span>
                        <div className='descbox'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corrupti sint consequatur voluptates eaque dicta ad placeat dolor magnam rerum, harum neque soluta? Est modi sequi, veniam veritatis accusamus adipisci.</p>
                        </div>
                    </div>
                    <div className="probstmtcontainer">
                        <span id='projsubheading'>Problem statement</span>
                        <div className='descbox'>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corrupti sint consequatur voluptates eaque dicta ad placeat dolor magnam rerum, harum neque soluta? Est modi sequi, veniam veritatis accusamus adipisci.</p>
                        </div>
                    </div>
                    <div className="githubLinkContainer">
                        <span id='projsubheading'>Github Project Link</span>
                        <div className='linkbox'>
                            <Link to={'#'}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corrupti sint consequatur voluptates eaque dicta ad placeat dolor magnam rerum, harum neque soluta? Est modi sequi, veniam veritatis accusamus adipisci.</p></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectDescriptionPage