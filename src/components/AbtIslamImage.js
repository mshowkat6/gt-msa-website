import React from "react";
import './AbtIslamImage.css'

function AbtIslamImage () {
    return (
        <div className="islam-container">   
            <div className = 'abt-islam-pic'>
                <img src="./images/qurans.JPG" alt='quran-header' className='quran-header' />
                <h1 className = "islam-header">
                    ABOUT ISLAM
                </h1>
            </div>
            <div className="key-concepts"> 
                <h1 className="key-concepts-header">Key Concepts Of Islam</h1>
                <div className="first-pic">
                <img src="./images/inside-farooq1.jpg" alt='kaaba-pic' className='kaaba-pic' />
                    <div className="first-text">
                        <p className="body">Islam is one of the world's major monotheistic religions, originating in the 7th century in the Arabian Peninsula with the revelations received by the Prophet Muhammad (peace be upon him). 
                            These revelations were later compiled into the religion's holy book, the Quran.
                        </p>
                        <p className="body"> Central to Islam is the belief in one God (Allah in Arabic) and the acceptance of Muhammad as the last in a line of prophets that includes figures like Abraham, Moses, and Jesus. 
                        Followers of Islam are called Muslims.
                        </p>
                    </div>
                </div>
                <p className="body" alt = "five-pillar">
                Islam is built upon five pillars that guide the life of every Muslim:
                </p>
                <p className="body-list"> 1. <span className="list-name"> Shahada (Declaration of Faith)</span> 
                    : Bearing witness that there is no god but Allah, and Muhammad is His messenger.</p>
                <p className="body-list"> 2. <span className="list-name"> Salat (Prayer)</span>
                    : Performing ritual prayers five times a day facing the Kaaba in Mecca.</p>
                <p className="body-list"> 3. <span className="list-name"> Zakat (Charity) </span> 
                    : Giving a portion of one's wealth to the needy.</p>
                <p className="body-list"> 4. <span className="list-name"> Sawm (Fasting) </span> 
                    : Observing a fast from dawn to sunset during the holy month of Ramadan.</p>
                <p className="body-list-last"> 5. <span className="list-name"> Hajj (Pilgrimage) </span>
                    : Undertaking a pilgrimage to Mecca at least once in a lifetime, if financially and physically able.</p>
                <p className="body">
                    Islam emphasizes the importance of knowledge, justice, compassion, and living a life that's pleasing to God. 
                    The religion has two primary sects: Sunni and Shia, which arose from a disagreement over the rightful successor to Prophet Muhammad.
                </p>
                <p className="body"> With over a billion followers, Islam is practiced worldwide and has rich traditions, diverse cultures, and a vast history.</p>
            </div>
            <div className="faq">
                <h1 className="faq-header">Frequently Asked Questions</h1>
                <div className="second-pic">
                   
                    <div className="second-text">
                        <p className="question">What is Islam?</p>
                        <p className="answer">Islam is a monotheistic religion founded on the teachings and life of the Prophet Muhammad (peace be upon him) in the 7th century CE.
                         It emphasizes the worship of one God, Allah in Arabic.</p>
                         <p className="question">
                            Who are Muslims?
                         </p>
                         <p className="answer">
                            Muslims are followers of Islam. They believe in the teachings of the Quran and the prophethood of Muhammad (peace be upon him).
                         </p>
                         <p className="question"> What are the Five Pillars of Islam? </p>
                         <p className="answer">
                          The Five Pillars are fundamental acts of worship in Islam. They are: Shahada (declaration of faith), Salat (prayer), Zakat (charity), Sawm (fasting during Ramadan), and Hajj (pilgrimage to Mecca).
                         </p>
                         <p className="question"> What is the Quran? </p>
                         <p className="answer"> The Quran is the holy book of Islam, believed to be the word of God as revealed to the Prophet Muhammad (peace be upon him).</p>
                         <p className="question">Why do Muslims pray five times a day?</p>
                         <p className="answer">
                         Prayer, or Salat, is one of the Five Pillars of Islam. It allows Muslims to maintain a close relationship with God and serves as a reminder of the divine throughout the day.
                         </p>
                    </div>
                    <img src="./images/prayer-film.JPG" alt='quran-pic' className='quran-pic' />
                </div>
                <p className="question">What is Ramadan?</p>
                    <p className="answer"> Ramadan is the ninth month of the Islamic lunar calendar. Muslims fast from dawn to sunset, refraining from food, drink, and other physical needs during daylight hours as an act of worship and obedience to God.</p>
                    <p className="question">Why do women wear the hijab?</p>
                    <p className="answer">
                    The hijab is a headscarf worn by some Muslim women as an expression of modesty and a reflection of their faith.
                    </p>
                    <p className="question">What is the difference between Sunni and Shia Muslims?</p>
                    <p className="answer">
                    Sunni and Shia are the two main sects of Islam, with differences primarily in their interpretations of the Quran and Hadith, and historical disagreements about the rightful successors to the Prophet Muhammad.
                    </p>
                    <p className="question">What is halal and haram?</p>
                    <p className="answer">"Halal" means permissible in Arabic, and it refers to what is allowed in Islam. "Haram" is the opposite, meaning forbidden or prohibited.</p>
                    <p className="question">Do Muslims believe in Jesus?</p>
                    <p className="answer">
                    Yes, Muslims believe in Jesus (peace be upon him) as a prophet and messenger of God. However, they do not regard him as divine or as the son of God.
                    </p>
            </div>
            <div className="further-reading">
                <h1 className="further-header">More Resources</h1>
                <p className="source1">Why Islam:  <a href= "https://www.whyislam.org/" target="_blank" rel="noopener noreferrer">https://www.whyislam.org/</a> </p>
                <p className="source2">Advice for recent Reverts: <a href= "https://www.youtube.com/watch?v=MLRLW-Co80Y" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=MLRLW-Co80Y</a> </p>
            </div>
        </div>
    )
}

export default AbtIslamImage