import React from "react";
import '../App.css';
import './AboutImage.css';

function AboutImage() {
    return (
        <div className="abt-conatiner">
            <div className = 'abt-image-container'>
                <img src="./abtIMG.JPG"  alt = 'abt-img' />
                <h1 className = "abt-header">
                    ABOUT US
                </h1>
            </div>
            <div className= "abt-info"> 
                <div className="who">
                    <div className="who-text">
                    <h2 className = 'who-we-are'> Who Are We?</h2>
                    <p className="we-are"> 
                    The Muslim Student Association of Georgia Tech originated primarily to bring together Muslims of diverse backgrounds and cultures under one unified, 
                    organized, proactive community. The MSA at Georgia Tech stands upon the principles of inclusiveness, responsibility, and action. As an organization aimed primarily at the student body, we strive to remain inclusive of those who wish to 
                    understand, appreciate, and practice their Islam without compromising their morals and beliefs. The MSA also reaches out to those who are not Muslims, primarily to educate them about the misconceptions regarding Islam and the Islamic way of life, and to include anyone willing to stand up for truth, 
                    justice, and peace.
                    </p>
                    </div>
                    <img src="./images/board.jpg" alt='boys-pfp' className='boys-pfp' />
                </div>
                <h2 className="meet-board">Meet the Board</h2>
            </div>
            <div className="board-pics">
                <div className="pic1-3">
                    <div className= "pic1">
                        <img src="./images/pfp2.jpg" alt='pfp-2' className='pfp-img' />
                        <h2 className="name">Renee Alnoubani</h2>
                        <p className="position">President</p>
                    </div>
                    <div className= "pic2">
                        <img src="./images/pfp2.jpg" alt='pfp-2' className='pfp-img' />
                        <h2 className="name">Khadijah Akbar</h2>
                        <p className="position">Sisters Vice President</p>
                    </div>
                    <div className= "pic3">
                        <img src="./images/pfp3.jpg" alt='pfp-3' className='pfp-img' />
                        <h2 className="name">Muadh George</h2>
                        <p className="position">Brothers Vice President</p>
                    </div>
                    <div className= "pic4">
                        <img src="./images/pfp4.jpg" alt='pfp-4' className='pfp-img' />
                        <h2 className="name">Noor Hassan</h2>
                        <p className="position">Marketing Chair</p>
                    </div>
                    <div className="pic5">
                        <img src="./images/pfp5.jpg" alt='pfp-5' className='pfp-img' />
                        <h2 className="name">Muneeza Chaudhry</h2>
                        <p className="position">Secretary</p>
                    </div>
                    <div className="pic6">
                        <img src="./images/pfp5.jpg" alt='pfp-5' className='pfp-img' />
                        <h2 className="name">Tahir Saied</h2>
                        <p className="position">Philanthropy Chair</p>
                    </div>
                    <div className="pic7">
                        <img src="./images/pfp5.jpg" alt='pfp-5' className='pfp-img' />
                        <h2 className="name">Rameez Raoof</h2>
                        <p className="position">Treasurer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutImage;