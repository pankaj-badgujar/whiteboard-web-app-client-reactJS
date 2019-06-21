import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseServiceForJSONFile from "../services/CourseServiceForJSONFile";
import ModuleService from "../services/ModuleService";

let courseService = CourseServiceForJSONFile.getInstance();
let moduleService = ModuleService.getInstance();

class ModuleList extends React.Component {
    constructor(props) {
        super(props);

        moduleService.findAllModulesForCourse(this.props.courseId)
            .then(modules => this.setState({

                modules:modules
            }))

        this.state = {
            module: {
                title: 'New Module'
            },

        }
    }

    titleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value
            }
        })
    };

    createModule = () => {
        moduleService.createModule(this.props.courseId, this.state.module)
            .then( modules => this.setState({
                modules: modules
            }));

        // this.props.modules = moduleService.findAllModulesForCourse();

        // this.setState({
        //     modules: courseService.findCourseById(this.props.courseId).modules
        // });
    };

    deleteModule = (moduleId) => {
        moduleService.deleteModule(moduleId);
        this.setState({
            modules: courseService.findCourseById(this.props.courseId).modules
        })
    };

    render() {

        return (

            <div>
                <input
                    onChange={this.titleChanged}
                    className="form-control"
                    defaultValue={this.state.module.title}
                    placeholder="Title"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block my-2"> Add New module
                </button>
                <br/>
                <ul className="list-group">
                    {this.state.modules !== undefined && this.state.modules.map(module => <ModuleListItem
                        selectedModule={this.props.selectedModule}
                        selectModule={this.props.selectModule}
                        courseId={this.props.courseId}
                        module={module}
                        key={module.id}
                        deleteModule={this.deleteModule}
                    />)}
                </ul>

            </div>


        );
    }

}

export default ModuleList