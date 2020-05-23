import React, { Component } from 'react';
import info from './info.json';
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import PersonalInfo from "./components/PersonalInfo";
import Buttons from "./components/Bottons/Buttons";
import profileImage from "../src/assets/profile.png"
// import Interests from "./Interets";
// import Skill from "./components/Skill";
// import Language from "./components/Language";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { info: info }
    }
    componentDidMount() {

        this.setState({ info: info })

    }


    render() {
        return (
            <div className="wrapper">
                <Buttons ></Buttons>
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img className="profile profile-image" src={profileImage}
                            // {this.state.info.image} 
                            alt="Chen Peleg imag"
                        />
                        <h1 className="name"> {this.state.info.name} </h1>
                        <h3 className="tagline">Front-End Developer</h3>
                    </div>
                    <div className="education-container container-block" style={{ textAlign: "justify" }}>
                        <h2 className="container-block-title"><i className="fa fa-user"></i> About Me</h2>
                        {this.state.info.aboutMe}
                    </div>

                    <div className="contact-container container-block">
                        <h2 className="container-block-title"><i className="fa fa-commenting"></i>Contact Me</h2>
                        <ul className="list-unstyled contact-list">
                            <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" + this.state.info.email}>{this.state.info.email}</a></li>
                            <li className="phone"><i className="fa fa-phone"></i><a href={"tel:" + this.state.info.phone}>{this.state.info.phone}</a></li>
                            <li className="website"><i className="fa fa-globe"></i><a href={this.state.info.website} target="_blank" rel="noopener noreferrer">{this.state.info.website}</a></li>
                            <li className="website"><i className="fa  fa-linkedin-square"></i><a href={this.state.info.linkedin} target="_blank" rel="noopener noreferrer">{this.state.info.linkedinName} (LinkedIn)</a></li>

                        </ul>
                    </div>
                    <div className="education-container container-block">

                        <h2 className="container-block-title"><i className="fa fa-book"></i>Education</h2>
                        {this.state.info.Education.map((item, key) => <Education item={item} key={key} />)}
                    </div>


                    {/* <div className="languages-container container-block">
                        <h2 className="container-block-title"><i className="fa fa-cubes"></i>Languages</h2>
                        <ul className="list-unstyled interests-list">
                            {this.state.info.Languages.map((item, key) => <Language item={item} key={key} />)}
                        </ul>
                    </div> */}


                </div>

                <div className="main-wrapper">



                    <section className="section experiences-section">
                        <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                        {this.state.info.Experiences.map((item, key) => <Experience item={item} key={key} />)}

                    </section>

                    <section className="skills-section section">
                        <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>

                        {this.state.info.technology.map((item, key) => <Technologies item={item} key={key} />)}
                        {/* <div className="skillset">
                            {this.state.info.Skills.map((item, key) => <Skill item={item} key={key} />)}
                        </div> */}
                    </section>

                    <section className="section projects-section">
                        <h2 className="section-title"><i className="fa fa-archive"></i>Projects and articles</h2>


                        {this.state.info.Projects.map((item, key) => <Projects item={item} key={key} />)}
                    </section>

                    <section className="section info-section">
                        <h2 className="section-title"><i className="fa fa-user-plus"></i>Personal information</h2>
                        <div className="intro">
                            <p>{this.state.info.ProjectDescription}</p>
                        </div>
                        {this.state.info.personalInfo.map((item, key) => <PersonalInfo item={item} key={key} />)}
                    </section>



                </div>
            </div>
        );
    }
}

export default App;
