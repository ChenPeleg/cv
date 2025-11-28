import {ProfileImage} from '../components/profileImage.tsx';
import profileImage from '../assets/profile.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import Education from '../components/Education.tsx';
import type {Information} from '../types/Information.ts';
import {ImageIcon} from '../icons/ImageIcon.tsx';

export const AppSidebar = ({info}: { info: Information }) => {
    return <div className="sidebar-wrapper">
        <div className="w-full flex flex-row md:flex-col items-center md:justify-center justify-center text-center p-4 pb-0">
            <div className={' flex flex-col items-center text-center  md:mb-4  '}>

                <ProfileImage profileImage={profileImage} funnyImages={[p1, p2, p3, profileImage]}/>
            </div>
            <div className={'md:contents flex flex-col items-center text-center md:p-4 px-4 pb-4 pb-0">'}>
                <h1 className="name"> {info.name} </h1>
                <h3 className="tagline">Front-End Developer</h3>
            </div>

        </div>
        <div className="aboutme-container container-block" style={{textAlign: 'justify'}}>
            <h2 className="container-block-title">
                {/*<ImageIcon name={'user-alt'}/>*/}
                <i className="fa fa-user"></i>
                About Me</h2>
            {info.aboutMe}
        </div>

        <div className="contact-container container-block">
            <h2 className="container-block-title"><i className="fa fa-commenting"></i>Contact Me</h2>
            <ul className="list-unstyled contact-list">
                <li className="email"><i className="fa fa-envelope"></i><a href={'mailto:' + info.email}>{info.email}</a></li>
                <li className="phone"><i className="fa fa-phone"></i><a href={'tel:' + info.phone}>{info.phone}</a></li>
                <li className="website"><i className="fa fa-globe"></i><a href={info.websiteUrl} target="_blank"
                                                                          rel="noopener noreferrer">{info.website}</a></li>
                <li className="medium"><i className="fa  fa-medium"></i><a href={info.mediumLink} target="_blank"
                                                                           rel="noopener noreferrer">{info.mediumName} (Medium)</a></li>
                <li className="linkedin"><i className="fa  fa-linkedin-square"></i><a href={info.linkedin} target="_blank"
                                                                                      rel="noopener noreferrer">{info.linkedinName} (LinkedIn)</a>
                </li>

            </ul>
        </div>
        <div className="education-container container-block">

            <h2 className="container-block-title"><i className="fa fa-book"></i>Education</h2>
            {info.Education.map((item: any, key: any) => <Education item={item} key={key}/>)}
        </div>

    </div>

}
