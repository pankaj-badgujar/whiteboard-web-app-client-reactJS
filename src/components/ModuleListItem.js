import React from 'react'
import ModuleList from './ModuleList.js'

const ModuleListItem = ({module, deleteModule}) =>

    <ul className="list-group">
        <li className="list-group-item">{module.title}
            <span className="float-right">
                <button className="btn btn-danger mx-2">
                <i onClick={() => deleteModule(module.id)} className="fa fa-trash "></i>
                </button>
                <button className="btn btn-warning mx-2">
                <i className="fa fa-edit"></i>
                    </button>
            </span>
        </li>
    </ul>


export default ModuleListItem