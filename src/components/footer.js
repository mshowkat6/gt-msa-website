import React from "react";
import './Footer.css';

function Footer () {
    return (
        <div className= "footer-container">
            <h1 className="footer-header">GTMSA</h1>
            <p className="footer-caption">CONTACT US: contact@gtmsa.org</p>
            <div className= "socials">
                <a href= "https://www.instagram.com/gt.msa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <i className = 'fab fa-instagram'/>
                </a>
                <a href= "https://www.facebook.com/gatechmsa/" target="_blank" rel="noopener noreferrer">
                    <i className = 'fab fa-facebook'/>
                </a>
                <a href= "https://www.tiktok.com/@gatechmsa" target="_blank" rel="noopener noreferrer">
                    <i className = 'fab fa-tiktok'/>
                </a>
                <a href= "https://youtube.com/@georgiatechmsa?si=lcZOChmXfi1FT_-1" target="_blank" rel="noopener noreferrer">
                    <i className = 'fab fa-youtube'/>
                </a>
            </div>
        </div>
    )
}

export default Footer;