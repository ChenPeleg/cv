import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import info from './info.json';
import Experience from "./Experience";
import Interests from "./Interets";
import Projects from "./Projects";
import Skill from "./Skill";
import Language from "./Language";
import Education from "./Education";
// import firebase from 'firebase';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                "Experiences": [
                    {
                        "baslik": "",
                        "lokasyon": "",
                        "tarih": "",
                        "aciklama": ""
                    }
                ],
                "Projects": [
                    {
                        "projectName": "",
                        "url": "",
                        "aciklama": ""
                    }
                ],
                "Skills": [
                    {
                        "skill": "C",
                        "yuzde": "60%"
                    },
                    {
                        "skill": "Java",
                        "yuzde": "60%"
                    },
                    {
                        "skill": "Python",
                        "yuzde": "50%"
                    },
                    {
                        "skill": "JavaScript",
                        "yuzde": "40%"
                    },
                    {
                        "skill": "Django",
                        "yuzde": "30%"
                    },
                    {
                        "skill": "MVC",
                        "yuzde": "20%"
                    }
                ],

                "Education": [
                    {
                        "baslik": "Science-Mathematics",
                        "icerik": "Tire Kutsan Anatolian High School",
                        "tarih": "2009 - 2013"
                    }
                ],

                "Languages": [
                    {
                        "dil": "Turkish",
                        "derece": "Native"
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
                        <h3 className="tagline">Developer</h3>
                    </div>

                    <div className="contact-container container-block">
                        <ul className="list-unstyled contact-list">
                            <li className="email"><i className="fa fa-envelope"></i><a href={"mailto:" + this.state.info.email}>{this.state.info.email}</a></li>
                            <li className="phone"><i className="fa fa-phone"></i><a href={this.state.info.phone}>{this.state.info.phone}</a></li>
                            <li className="website"><i className="fa fa-globe"></i><a href={this.state.info.website} target="_blank">{this.state.info.website}</a></li>
                            <li className="twitter"><i className="fa fa-twitter"></i><a href={this.state.info.twitterlink} target="_blank">{this.state.info.twitter}</a></li>
                        </ul>
                    </div>
                    <div className="education-container container-block">
                        <h2 className="container-block-title">Education</h2>
                        {this.state.info.Education.map((item, key) => <Education item={item} key={key} />)}
                    </div>


                    <div className="languages-container container-block">
                        <h2 className="container-block-title">Languages</h2>
                        <ul className="list-unstyled interests-list">
                            {this.state.info.Languages.map((item, key) => <Language item={item} key={key} />)}
                        </ul>
                    </div>

                    <div className="interests-container container-block">
                        <h2 className="container-block-title">Interests</h2>
                        <ul className="list-unstyled interests-list">
                            {this.state.info.Interests.map((item, key) => <Interests item={item} key={key} />)}
                        </ul>
                    </div>

                </div>

                <div className="main-wrapper">


                    <section className="section summary-section">
                        <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                        <div className="summary">
                            <p>{this.state.info.Career}</p>
                        </div>
                    </section>

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
