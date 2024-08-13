import React from "react";
import './DonateImage.css'

function DonateImage () {
    return (
        <div className = 'donate-container'>
            <div className="donate-image-container">
                <img src="./images/donatePic.JPG" alt='donate-pic' className='donate-pic' />
                <h1 className = "donate-header">
                    DONATE NOW
                </h1>
            </div>
            <div className="msa-fund-container">
                <h1 className="fund-header">
                    Contribute To Our MSA Fund
                </h1>
                <img src="./images/msaFund.JPG" alt='msaFund-pic' className='msaFund-pic' />
                <p className="fund-caption">
                    The MSA is dedicated to hosting a wide range of events and activities that bring our community together. To continue providing these meaningful experiences, we rely on your generous support. Your donation will help us cover the costs of supplies, food, 
                    and other essentials needed to keep our events running smoothly.
                    By donating, you are contributing to Sadaqah, a powerful act of charity that benefits both the giver and the community. If you choose to donate via Zelle or Venmo, please mention that your contribution is for the MSA fund in the comment section.
                    Thank you for helping us sustain our efforts and make a positive impact!
                </p>
            </div>
            <div className="charity-fund-container">
                <h1 className="fund-header">
                    Donate To Our Charity Fund
                </h1>
                <img src="./images/charityFund.jpg" alt='charityFund-pic' className='charityFund-pic' />
                <p className="fund-caption">
                    The MSA is deeply committed to supporting those in need and has made a significant impact through various charitable efforts. 
                    Our initiatives include raising over $70,000 for Palestine, constructing multiple water infrastructure systems in underserved countries, and collecting hundreds of shoes for the people of Congo, among many other acts of kindness. 
                    By donating, you are performing an act of Sadaqah, a deed greatly loved by Allah. If you choose to contribute via Zelle or Venmo, please ensure to note that your donation is intended for the charity fund in the comment section.
                </p>

            </div>
        </div>
    )
}

export default DonateImage