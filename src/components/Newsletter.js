import React, { useEffect } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, []);

return (
    <div id="mc_embed_shell" className="mc_embed_center">
      <h2 className='form-header'>Subscribe To Our Mailing List</h2>
      <p className='form-caption'>Stay updated with our organization by subscribing to our mailing list. There will be weekly reminders and announcements sent out to ensure you stay in the loop!</p>
        <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
        />
        <style type="text/css">
            {`
            #mc_embed_signup {background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 1000px;}
            `}
        </style>
        <div id="mc_embed_signup">
            <form
                action="https://gtmsa.us11.list-manage.com/subscribe/post?u=7171dc5dea595b8a8e0aac648&amp;id=c0f0ac2f31&amp;f_id=006dace0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
            >
                <div id="mc_embed_signup_scroll">
                    <div className="indicates-required">
                        <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-FNAME">First Name </label>
                        <input type="text" name="FNAME" className="text" id="mce-FNAME" />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-LNAME">Last Name </label>
                        <input type="text" name="LNAME" className="text" id="mce-LNAME" />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                    </div>
                    <div className="mc-field-group">
                        <label htmlFor="mce-MMERGE3">Phone </label>
                        <input type="text" name="MMERGE3" className="text" id="mce-MMERGE3" />
                    </div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_7171dc5dea595b8a8e0aac648_c0f0ac2f31" tabIndex="-1" value="" />
                    </div>
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                            <p style={{ margin: '0px auto' }}>
                                <a href="http://eepurl.com/iN5gL-" title="Mailchimp - email marketing made easy and fun">
                                    <span className="referral_badge_container">
                                        <img
                                            className="referral_badge"
                                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                            alt="Intuit Mailchimp"
                                        />
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
};

export default Newsletter;
