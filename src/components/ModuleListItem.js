import React from 'react'
import {Link} from "react-router-dom";

const ModuleListItem = ({courseId, module, deleteModule, selectModule, selectedModule}) =>


    <li
        className={module === selectedModule ? "list-group-item active" : "list-group-item"}

    >

        <div className="row">
            <div className={"col-6"} onClick={() => selectModule(module)}>
                {module.title}
            </div>
            <div className="col-6">
                <div >
                    <button onClick={() => deleteModule(module.id)} className="btn btn-danger mx-1 float-left"
                    >
                        <i className="fa fa-trash "></i>
                    </button>
                </div>
                <button className="btn btn-warning mx-1 float-right">
                    <i className="fa fa-edit"></i>
                </button>
            </div>
        </div>

    </li>


export default ModuleListItem