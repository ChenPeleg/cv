import {Component} from 'react';
import ProjectLinks from './ProjectLinks'

class Projects extends Component<any, any> {
    render() {
        return (
            <div className="item">
                <span className="project-title"><a href={this.props.item.url} target="_blank"
                                                   rel="noopener noreferrer">{this.props.item.projectName}</a></span> - <span
                className="project-tagline">{this.props.item.explanation}</span>

                {this.props.item.links.length ?
                    (<div>  {this.props.item.links.map((item: any, key: any) => <ProjectLinks item={item}
                                                    key={key}/>)}</div>) :
               <span>   <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
                    {this.props.item.url}</a></span>}
            </div>
        );

    }
}

export default Projects;

