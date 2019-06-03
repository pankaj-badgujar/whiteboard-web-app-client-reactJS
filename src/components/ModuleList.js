import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {
                id: '-1',
                title: 'New Module'
            },
            modules: this.props.modules
        }
    }

    titleChanged = (event) => {
        this.setState({
            module: {
                id: (new Date()).getTime(),
                title: event.target.value
            }
        })
    }

    createModule = () => {
        this.setState({
            modules: [this.state.module, ...this.state.modules]
        })
    }

    deleteModule = (moduleId) => {
        this.setState({
            modules: this.state.modules.filter(module => module.id !== moduleId)
        })

    }

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
                    {this.state.modules.map(module => <ModuleListItem
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