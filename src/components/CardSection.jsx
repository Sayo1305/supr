import React from 'react';
import Card1 from "../assets/images/card1.jpg";
import Card2 from "../assets/images/card2.jpg";
import Card3 from "../assets/images/card3.jpg";
import Card4 from "../assets/images/card4.jpg";

const CardSection = () => {
return(
    <div className="cardSectionContainter">
    <div className="container">
        <div className="card">
            <img src={Card1} alt=""/>
            <div className="intro">
                <h2>1 on 1 Call</h2>
                <p>Book a 1 on 1 session with your favorite mentor.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={Card2} alt=""/>
            <div className="intro">
                <h2>Resources</h2>
                <p>get amazing content at just one click and that too free of cost.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={Card3} alt=""/>
            <div className="intro">
                <h2>Project Contribution</h2>
                <p>Struggling with your ongoing personal project? get help.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={Card4} alt=""/>
            <div className="intro">
                <h2>Video Contribution</h2>
                <p>do something for the community and add your valuable skills.
                </p>
            </div>
        </div>
    </div>
    </div>
);
};
export default CardSection;