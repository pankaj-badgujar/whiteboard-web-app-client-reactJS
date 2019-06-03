import React from 'react'
import {Link} from "react-router-dom";

const ModuleListItem = ({courseId,module, deleteModule, selectModule, selectedModule}) =>


        <li
            className={module === selectedModule ? "list-group-item active" : "list-group-item"}
            onClick={() => selectModule(module)}
        >

            <div className="row">
                <div className={"col-6"}>
            {module.title}
                </div>
                <div className="col-6">
                    <button className="btn btn-danger mx-1 float-left">
                        <i onClick={() => deleteModule(module.id)} className="fa fa-trash "></i>
                    </button>
                    <button className="btn btn-warning mx-1 float-right">
                        <i className="fa fa-edit"></i>
                    </button>
                </div>
            </div>

        </li>



export default ModuleListItem