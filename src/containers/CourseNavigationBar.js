import React from 'react'
import {Link} from "react-router-dom";

const CourseNavigationBar = ({changeCourseTitle, addCourse}) =>
    <div className="container-fluid">
        <div className="row bg-light p-3">
            <Link to={"/"}>
                <i className="fa fa-bars btn my-2 btn-outline-info "></i>
            </Link>
            <h2 className="d-none d-sm-block col-3">Course
                Manager</h2>
            <div className="col-sm-4 col-9">
                <input type="text"
                       className="form-control"
                       id="newCourseFld"
                       placeholder="New Course Title"
                       onChange={(event) => changeCourseTitle(event)}
                />
            </div>
            <div className="col-2">
                <button
                    className="btn rounded-circle btn-danger"
                    onClick={() => addCourse()}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <div>
                <Link to="/course-grid">
                    <div className="d-none d-sm-block">
                        <button type="button" className="btn"><i className="fa fa-th"></i></button>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/course-list">
                    <div className="d-none d-sm-block">
                        <button type="button" className="btn"><i className="fa fa-list"></i></button>
                    </div>
                </Link>
            </div>

        </div>

    </div>


export default CourseNavigationBar