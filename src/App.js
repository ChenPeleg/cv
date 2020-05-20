import React, { Component } from 'react';

import info from './info.json';
import Experience from "./Experience";
// import Interests from "./Interets";
import Projects from "./Projects";
import Skill from "./Skill";
import Language from "./Language";
import Education from "./Education";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                "Experiences": [
                    {
                        "title": "",
                        "location": "",
                        "date": "",
                        "explanation": ""
                    }
                ],
                "Projects": [
                    {
                        "projectName": "",
                        "url": "",
                        "explanation": ""
                    }
                ],
                "Skills": [
                    {
                        "skill": "C",
                        "percent": "60%"
                    },
                    {
                        "skill": "Java",
                        "percent": "60%"
                    },
                    {
                        "skill": "Python",
                        "percent": "50%"
                    },
                    {
                        "skill": "JavaScript",
                        "percent": "40%"
                    },
                    {
                        "skill": "Django",
                        "percent": "30%"
                    },
                    {
                        "skill": "MVC",
                        "percent": "20%"
                    }
                ],

                "Education": [
                    {
                        "title": "Science-Mathematics",
                        "content": "Tire Kutsan Anatolian High School",
                        "date": "2009 - 2013"
                    }
                ],

                "Languages": [
                    {
                        "language": "Turkish",
                        "level": "Native"
                    }
                ],

                "Interests": [
                    { "hobi": "Travelling" }
                ]
            }
        };
    }
    componentDidMount() {

        this.setState({ info: info })

    }


    render() {
        return (
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img className="profile" src={this.state.info.image} alt=""
                            width="80%" style={{ borderRadius: "50% 50%" }} />
                        <h1 className="name"> {this.state.info.name} </h1>
                        <h3 className="tagline">Front-End Developer</h3>
                    </div>
                    <div className="education-container container-block" style={{ textAlign: "justify" }}>
                        <h2 className="container-block-title"><i className="fa fa-user"></i> About Me</h2>
                        {this.state.info.aboutMe}
                    </div>

                    <div className="contact-container container-block">
                        <h2 className="container-block-title"><i className="fa fa-wechat"></i>Contact Me</h2>
                        <ul className="list-unstyled contact-list">
                            <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" + this.state.info.email}>{this.state.info.email}</a></li>
                            <li className="phone"><i className="fa fa-phone"></i><a href={this.state.info.phone}>{this.state.info.phone}</a></li>
                            <li className="website"><i className="fa fa-globe"></i><a href={this.state.info.website} target="_blank">{this.state.info.website}</a></li>

                        </ul>
                    </div>
                    <div className="education-container container-block">

                        <h2 className="container-block-title"><i className="fa fa-book"></i>Education</h2>
                        {this.state.info.Education.map((item, key) => <Education item={item} key={key} />)}
                    </div>


                    <div className="languages-container container-block">
                        <h2 className="container-block-title"><i className="fa fa-cubes"></i>Languages</h2>
                        <ul className="list-unstyled interests-list">
                            {this.state.info.Languages.map((item, key) => <Language item={item} key={key} />)}
                        </ul>
                    </div>


                </div>

                <div className="main-wrapper">


                    {/* <section className="section summary-section">
                        <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                        <div className="summary">
                            <p>{this.state.info.Career}</p>
                        </div>
                    </section> */}

                    <section className="section experiences-section">
                        <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2>

                        {this.state.info.Experiences.map((item, key) => <Experience item={item} key={key} />)}

                    </section>


                    <section className="section projects-section">
                        <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
                        <div className="intro">
                            <p>{this.state.info.ProjectDescription}</p>
                        </div>
                        {this.state.info.Projects.map((item, key) => <Projects item={item} key={key} />)}
                    </section>

                    <section className="skills-section section">
                        <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                        <div className="skillset">
                            {this.state.info.Skills.map((item, key) => <Skill item={item} key={key} />)}
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default App;
