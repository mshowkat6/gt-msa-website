import React from 'react';
import './VolunteerImage.css';

function VolunteerImage() {
    return (
        <div className='main-container'>
            <div className='volunteer-header-pic'>
                <img src="./images/farooq-pic.jpg" alt='farooq-header' className='farooq-header' />
                <h2 className='volunteer-header'>
                    VOLUNTEERING
                </h2>
            </div>
            <div className='volunteer-container'>
                <div className='farooq-container'>
                    <img src="./images/farooq-pic.jpg" alt='farooq-pic' className='farooq-pic' />
                    <div className='farooq-text'>
                        <h2 className='farooq-header'>Volunteer at Al-Farooq Masjid</h2>
                        <p className='farooq-caption'>
                        Alhamdulilah, all the programs and initiatives that take place at Al-Farooq Masjid are run by a dedicated team of volunteers who take time out of their busy lives for the sake of Allah. 
                        They are always in need of additional volunteers to launch new initiatives and expand on their existing programs. 
                        </p>
                        <p>
                        If you would like to get involved in the masjid and earn some reward in the process please sign up <a href= "http://bit.ly/afm_volunteer" target="_blank" rel="noopener noreferrer">here.</a>
                        </p>
                    </div>
                </div>
                <div className='voter-container'>
                    <div className='voter-text'>
                        <h2 className='voter-header'>Volunteer with Georgia Muslim Voter Project</h2>
                        <p className='voter-caption'>
                        The Georgia Muslim Voter Project (GAMVP) was founded in late 2015 in response to the growing anti-Muslim rhetoric in mainstream politics and the low rates of civic engagement within the Muslim community. 
                        GAMVP's mission is to activate Muslim voters to elevate their voices, standing for equal representation and justice in all forms.
                        </p>
                        <p>
                        To sign up as a volunteer for GAMVP, please click <a href= "https://www.gamvp.org/volunteer" target="_blank" rel="noopener noreferrer">here.</a>
                        </p>
                    </div>
                    <img src="./images/muslim-voter.png" alt='muslim-voter' className='muslim-voter' />
                </div>
                <div className='food-bank-container'>
                    <img src="./images/food-bank.jpeg" alt='food-bank' className='food-bank' />
                    <div className='food-text'>
                        <h2 className='food-header'>Volunteer with the Atlanta Community Food Bank</h2>
                        <p className='food-caption'>
                        The Atlanta Community Food Bank relies on more than 15,000 volunteers every year in various capacities. Individual volunteers and volunteer groups lend support to their day-to-day operations as well as helping to staff special events and other opportunities.
                        </p>
                        <p>
                        Click <a href= "https://acfb.volunteerhub.com/vv2/" target="_blank" rel="noopener noreferrer">here</a> to sign-up for specific volunteering slots.
                        </p>
                    </div>
                </div>
                <div className='downtown-container'>
                    <div className='downtown-text'>
                        <h2 className='downtown-header'>Volunteer with Project Downtown in Atlanta</h2>
                        <p className='downtown-caption-1'>
                        Project Downtown is a student-run community service organization that serves over a dozen cities. 
                        Their mission is to provide essential services for homeless and disadvantaged segments of the community. 
                        Furthermore, the organization strives to uphold the principles and spirit of Islam in their endeavors. 
                        They welcome everyone to join them in providing compassionate, humanitarian services to those in desperate need.
                        </p>
                        <p className='downtown-caption-2'>
                        Volunteers convene at Masjid Al Farooq every other Sunday at 10:30 A.M. 
                        The Masjid is located at 442 14th Street NW, Atlanta, GA 30308. 
                        Around 12:00 to 12:30 P.M., they move to their designated distribution sites, alternating between Downtown and an apartment complex with a significant number of new refugees.
                        </p>
                        <p className='downtown-caption-3'>
                        Typically, these gatherings occur on the second and fourth Saturday of each month, although the schedule may occasionally change due to local events.
                        Click <a href= "https://www.instagram.com/pdatlanta/" target="_blank" rel="noopener noreferrer">here</a> for more information.
                        </p>
                    </div>
                    <img src="./images/downtown.jpg" alt='project-downtown' className='project-downtown' />
                </div>
            </div>
        </div>
    );
}

export default VolunteerImage;
