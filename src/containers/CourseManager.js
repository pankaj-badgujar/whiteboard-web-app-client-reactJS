import React, {Component} from 'react';
export default class CourseManager extends Component{
    render() {
        return (
            <div className="row bg-light">
                <button type="button" className="btn btn-light col-1">
                    <i className="fas fa-bars"></i>
                </button>
                <label className="d-none d-sm-block col-3 col-form-label">Course
                    Manager</label>

                <div className="col-sm-4 col-9">
                    <input type="text" className="form-control" id="newCourseFld"
                           placeholder="New Course Name" />
                </div>
                <div className="col-2">
                    <button type="button" className="btn rounded-circle">
                        <i className="fas fa-plus"></i>
                    </button>

                </div>
            </div>
    )
    }
    }