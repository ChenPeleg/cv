import ExportButtons from '../components/Bottons/ExportButtons.tsx';
import {ProfileImage} from '../components/profileImage.tsx';
import profileImage from '../assets/profile.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import Education from '../components/Education.tsx';
import Experience from '../components/Experience.tsx';
import Technologies from '../components/Technologies.tsx';
import Projects from '../components/Projects/Projects.tsx';
import PersonalInfo from '../components/PersonalInfo.tsx';

export const AppLayout = ({info} : {info :any}) => {
    return    <div className="wrapper">
        <ExportButtons></ExportButtons>
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <ProfileImage profileImage={profileImage} funnyImages={[p1, p2, p3, profileImage]} />
                <h1 className="name"> { info.name} </h1>
                <h3 className="tagline">Front-End Developer</h3>
            </div>
            <div className="aboutme-container container-block" style={{ textAlign: "justify" }}>
                <h2 className="container-block-title"><i className="fa fa-user"></i> About Me</h2>
                { info.aboutMe}
            </div>

            <div className="contact-container container-block">
                <h2 className="container-block-title"><i className="fa fa-commenting"></i>Contact Me</h2>
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" +  info.email}>{ info.email}</a></li>
                    <li className="phone"><i className="fa fa-phone"></i><a href={"tel:" +  info.phone}>{ info.phone}</a></li>
                    <li className="website"><i className="fa fa-globe"></i><a href={ info.websiteUrl} target="_blank" rel="noopener noreferrer">{ info.website}</a></li>
                    <li className="medium"><i className="fa  fa-medium"></i><a href={ info.mediumLink} target="_blank" rel="noopener noreferrer">{ info.mediumName} (Medium)</a></li>
                    <li className="linkedin"><i className="fa  fa-linkedin-square"></i><a href={ info.linkedin} target="_blank" rel="noopener noreferrer">{ info.linkedinName} (LinkedIn)</a></li>

                </ul>
            </div>
            <div className="education-container container-block">

                <h2 className="container-block-title"><i className="fa fa-book"></i>Education</h2>
                { info.Education.map((item: any, key: any) => <Education item={item} key={key} />)}
            </div>



        </div>

        <div className="main-wrapper">


            <section className="section experiences-section">
                <h2 className="section-title"><i className="fa fa-briefcase"></i>Experience</h2>

                { info.Experiences.map((item: any, key: any) => <Experience item={item} key={key} />)}

            </section>

            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>

                { info.technology.map((item: any, key: any) => <Technologies item={item} key={key} />)}
                {/* <div className="skillset">
                            { info.Skills.map((item, key) => <Skill item={item} key={key} />)}
                        </div> */}
            </section>

            <section className="section projects-section">
                <h2 className="section-title"><i className="fa fa-archive"></i>Projects and articles</h2>


                { info.Projects.map((item: any, key: any) => <Projects item={item} key={key} />)}
            </section>

            <section className="section info-section">
                <h2 className="section-title"><i className="fa fa-user-plus"></i>Personal information</h2>
                <div className="intro">
                    <p>{ info['ProjectDescription']}</p>
                </div>
                { info.personalInfo.map((item: any, key: any) => <PersonalInfo item={item} key={key} />)}
            </section>



        </div>
    </div>
}
