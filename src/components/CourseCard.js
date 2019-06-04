import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, selectCourse}) =>
    <div className={"col-2"}>
        <div className="card" styles={{width: '18rem'}}>
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Card text.</p>
                <Link to={`/course-editor/${course.id}`} onClick={() => selectCourse(course)} className="btn
                    btn-primary">More...</Link>
                <div className={"my-2"}>

                    <i className="fa fa-trash btn btn-danger float-left" onClick={() => deleteCourse(course.id)}></i>
                    <Link to={`/course-editor/${course.id}`} onClick={() => selectCourse(course)}>
                        <i className="fa fa-pencil btn btn-warning float-right"></i>
                    </Link>
                </div>
            </div>


        </div>
    </div>

export default CourseCard
