import React, {Component} from 'react';
import CourseTable from "./CourseTable";
export default class CourseManager extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-light p-3">
                    <button type="button" className="btn col-1">
                        <i className="fa fa-bars"></i>
                    </button>
                    <h2 className="d-none d-sm-block col-3">Course
                        Manager</h2>

                    <div className="col-sm-4 col-9">
                        <input type="text" className="form-control" id="newCourseFld"
                               placeholder="New Course Title"/>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn rounded-circle btn-danger">
                            <i className="fa fa-plus"></i>
                        </button>

                    </div>
                </div>

            </div>
        )
    }
}