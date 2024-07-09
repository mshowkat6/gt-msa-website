import React from 'react';
import './Cards.css';

function Cards() {
    return (
        <div className='card-container'>
            <div className='card-container-left'>
                <img src="./images/gc-img.jpg" alt='gc-img' className='gc-img' />
                <div className='gc-text'>
                    <h2 className='gc-header'>Join Our Group Chat</h2>
                    <p className='gc-caption'>
                        Stay connected with the MSA community through our dedicated WhatsApp groups for boys and girls. Get live updates on events,
                        ask school-related questions, make new friends, and much more. To join, 
                        simply direct message us on <a href="https://www.instagram.com/gt.msa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a> and request an invite to our group chat.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
