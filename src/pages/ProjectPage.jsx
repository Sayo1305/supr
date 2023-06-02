import React, { useEffect, useState } from 'react'
import '../assets/css/ProjectPage.css'
import card4 from '../assets/images/card4.jpg'
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePeopleOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { child, get, onValue, ref } from "firebase/database";
import { db } from "../firebase";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


dayjs.extend(relativeTime);

const ProjectPage = () => {
    const navigate = useNavigate();
    const [oldposts, setoldposts] = useState([]);
    const [recentposts, setrecentposts] = useState([]);
    const currdate = new Date();
    const createdAt = dayjs(currdate).fromNow();


    useEffect(() => {
        onValue(ref(db, `ProjectPosts/`), (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const dataKeys = Object.keys(data);
                let arr = [];
                for (let i = 0; i < dataKeys.length; i++) {
                    arr.push(data[dataKeys[i]]);
                }
                arr.sort((a, b) => b.timestamp - a.timestamp);
                setrecentposts(arr.slice(0, 3));
                setoldposts(arr.slice(3));
                console.log(arr);
            }
        });
    }, [])
    return (
        <div>
            <div className="projecthero">
                <div className="projectheading">
                    <div className="header">
                        <span id='projspan1'>Project Help<br /></span>
                        <span id='projspan2'>Work with top community members to bring your ideas to life.</span>
                    </div>
                    <div><button className='addbtn' onClick={() => { navigate("/postpage") }}><AiOutlinePlus />Create Post</button></div>
                </div>
                <div className="recentposts">
                    <span id='postheading'>Recent Posts</span>
                    <div className="cardscontainer">
                        {recentposts.map((item) => (
                            <div className="projectcard">
                                <img src={card4} alt="image" />
                                <div className="cardcontent">
                                    <span id='cardspan1'>{item.projname}</span>
                                    <div className='technologies'>
                                        {item.technologies.map((tech) => (
                                            <span>{tech}</span>
                                        ))}
                                    </div>
                                    <p id='cardspan3'>{item.projdesc.slice(0, 100)}...</p>
                                    <div className='viewers'>
                                        <button id='contributebtn' onClick={() => { navigate(`/desc/${item.id}`) }}>contribute</button>
                                        <span id='people'><MdOutlinePeopleOutline size={30} /></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="allpost">
                    {oldposts.map((item) => (
                        <div className="allcard" key={item.id}>
                            <div className="cardcontent cardcontentdark">
                                <span id='cardspan1'>{item.projname}</span>

                                <div className='technologies technologiesdark'>
                                    {item.technologies.map((tech) => (
                                        <span>{tech}</span>
                                    ))}
                                </div>
                                <p id='cardspan3'>{item.projdesc.slice(0,150)}...</p>
                                <div className='viewers viewersdark'>
                                    <button id='contributebtndark' className='btndark' onClick={() => { navigate(`/desc/${item.id}`) }}>contribute</button>
                                    <span id='people'><MdOutlinePeopleOutline size={30} /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProjectPage