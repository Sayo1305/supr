import React, {useState} from 'react'
import '../assets/css/ProjectPage.css'
import { Link } from 'react-router-dom'

const CreatePostPage = () => {
    const [technologyInput, setTechnologyInput] = useState('');
    const [technologies, setTechnologies] = useState([]);

    //NOTE: trim() method is used to remove whitespaces from the text
    //The ... is known as the spread operator in JavaScript. In the context of [...technologies, trimmedInput], it is used to create a new array by spreading the elements of the existing technologies array and then adding the trimmedInput value at the end.
    //For example, let's say the initial technologies array is ['HTML', 'CSS'], and trimmedInput is 'JavaScript'. The expression [...technologies, trimmedInput] will create a new array ['HTML', 'CSS', 'JavaScript'], combining the existing technologies with the new technology.

    const addTechnology = () => {
        const trimmedInput = technologyInput.trim();
        if (trimmedInput !== '') {
            setTechnologies([...technologies, trimmedInput]);
            setTechnologyInput('');
        }
    };

    return (
        <div>
            <div className="projecthero">
                <div className="projectheading">
                    <div className="header">
                        <span id='projspan1'>Hello, take help from your fellow developers<br /></span>
                        <span id='projspan2'>Work with top community members to bring your ideas to life.</span>
                    </div>
                </div>
                <div className="probstmtcontainer">
                    <span id='projsubheading'>Project Name</span>
                    <div className='postbox'>
                        <textarea name="message" placeholder="Enter Project Name"></textarea>
                    </div>
                </div>
                <div className="projectTechnologiesContainer">
                    <span id='projsubheading'>Technologies Used</span>
                    <div className='technologiesdesc'>
                        {/* traverse the array and display the content */}
                        {technologies.map((technology) => (
                            <span>{technology}</span>
                        ))}
                        <input
                            type="text"
                            value={technologyInput}
                            onChange={(e) => setTechnologyInput(e.target.value)}
                            placeholder="Enter technology"
                        />
                        <button onClick={addTechnology}>Add more</button>
                    </div>
                </div>
                <div className="projectDescContainer">
                    <span id='projsubheading'>Project Description</span>
                    <div className='postbox'>
                        <textarea name="message" placeholder="Give brief description of the project..."></textarea>
                    </div>
                </div>
                <div className="probstmtcontainer">
                    <span id='projsubheading'>Problem statement</span>
                    <div className='postbox'>
                        <textarea name="message" placeholder="Enter the problem statement..."></textarea>
                    </div>
                </div>
                <div className="githubLinkContainer postlink">
                    <span id='projsubheading'>Github Project Link</span>
                    <div className='postlinkbox'>
                        <textarea name="message" placeholder="Enter Github link of the project..."></textarea>
                    </div>
                </div>
                <div><button className='publishbtn'>publish</button></div>
            </div>
        </div>
    )
}

export default CreatePostPage