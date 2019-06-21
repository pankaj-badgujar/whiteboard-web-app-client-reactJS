import React from 'react'

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.updateNewModuleName = this.updateNewModuleName.bind(this);
    }

    state = {
        editing: false
    };

    toggleEditing(event) {
        this.setState({
            editing: !this.state.editing
        });
        if (this.state.editing === true && this.state.newModuleName !== undefined
            && this.state.newModuleName.replace(/^\s*/, "").length !== 0) {
            this.props.updateModule(this.props.module.id, this.state.newModuleName);
        }
    }

    updateNewModuleName(event) {
        this.setState({
            newModuleName: event.target.value
        })
    }

    render() {
        return (
            <li
                className={module === this.props.selectedModule ? "list-group-item active" : "list-group-item"}

            >

                <div className="row">
                    {!this.state.editing &&
                    <div className={"col-6"} onClick={() => this.props.selectModule(module)}>
                        {this.props.module.title}
                    </div>}

                    {this.state.editing &&
                    <div className={"col-6"}>
                        <input
                            onChange={this.updateNewModuleName}
                            className={"form-control"}
                            placeholder={"Enter new name for course"}
                        />
                    </div>}


                    <div className="col-6">
                        <div>
                            <i onClick={() => this.props.deleteModule(this.props.module.id)}
                               className="fa fa-trash btn btn-danger mx-1 float-left"></i>
                        </div>

                        {!this.state.editing &&
                        <i onClick={this.toggleEditing} className="fa fa-edit btn btn-warning mx-1 float-right"></i>
                        }
                        {this.state.editing &&
                        <i onClick={this.toggleEditing}
                           className="fa fa-check-circle btn btn-success mx-1 float-right"></i>
                        }


                    </div>
                </div>

            </li>
        )
    }
}


export default ModuleListItem

// = ({courseId, module, deleteModule, selectModule, selectedModule}) =>