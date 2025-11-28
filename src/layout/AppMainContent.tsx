import type {Information} from '../types/Information.ts';
import Experience from '../components/Experience.tsx';
import Technologies from '../components/Technologies.tsx';
import Projects from '../components/Projects/Projects.tsx';
import PersonalInfo from '../components/PersonalInfo.tsx';
import {CircleIcon} from '../components/CircleIcon/CircleIcon.tsx';

export const AppMainContent = ({info}: { info: Information }) => {
    // @ts-ignore
    return    <div className="main-wrapper">


        <section className="section experiences-section">
            <h2 className="section-title">
                <CircleIcon name={'book-check'}/>

                Experience</h2>

            {info.Experiences.map((item: any, key: any) => <Experience item={item} key={key}/>)}

        </section>

        <section className="skills-section section">
            <h2 className="section-title">
                <CircleIcon name={'box-alt'}/>

                Skills &amp; Proficiency</h2>

            {info.technology.map((item: any, key: any) => <Technologies item={item} key={key}/>)}

        </section>

        <section className="section projects-section">
            <h2 className="section-title"><i className="fa fa-archive"></i>Projects and articles</h2>


            {info.Projects.map((item: any, key: any) => <Projects item={item} key={key}/>)}
        </section>

        <section className="section info-section">
            <h2 className="section-title"><i className="fa fa-user-plus"></i>Personal information</h2>

            {info.personalInfo.map((item: any, key: any) => <PersonalInfo item={item} key={key}/>)}
        </section>


    </div>

}
