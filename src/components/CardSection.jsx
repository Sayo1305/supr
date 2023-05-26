import React from 'react';
import "../assets/css/cards.css";
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore error consequuntur inventore aliquid eius fuga culpa ipsum vitae maiores voluptatem, cumque odit minima deserunt.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={Card2} alt=""/>
            <div className="intro">
                <h2>Resources</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore error consequuntur inventore aliquid eius fuga culpa ipsum vitae maiores voluptatem, cumque odit minima deserunt.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={Card3} alt=""/>
            <div className="intro">
                <h2>Project Contribution</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore error consequuntur inventore aliquid eius fuga culpa ipsum vitae maiores voluptatem, cumque odit minima deserunt.
                </p>
            </div>
        </div>

        <div className="card">
            <img src={Card4} alt=""/>
            <div className="intro">
                <h2>Video Contribution</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur labore error consequuntur inventore aliquid eius fuga culpa ipsum vitae maiores voluptatem, cumque odit minima deserunt.
                </p>
            </div>
        </div>
    </div>
    </div>
);
};
export default CardSection;