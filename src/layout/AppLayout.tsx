import ExportButtons from '../components/Bottons/ExportButtons.tsx';

import Experience from '../components/Experience.tsx';
import Technologies from '../components/Technologies.tsx';
import Projects from '../components/Projects/Projects.tsx';
import PersonalInfo from '../components/PersonalInfo.tsx';
import type {Information} from '../types/Information.ts';
import {AppSidebar} from './AppSidebar.tsx';

export const AppLayout = ({info} : {info :Information}) => {
    return    <div className="wrapper">
        <ExportButtons></ExportButtons>
        <AppSidebar info={info} />

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
