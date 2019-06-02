import React from 'react'

const CourseCard = ({course,deleteCourse}) =>
    <div className={"col-2"}>
        <div className="card" styles={{width: '18rem'}}>
            <img className="card-img-top"
                 src="https://picsum.photos/300/200"/>
            <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Card text.</p>
                <a href={`/course-editor/${course.id}`} className="btn btn-primary">More...</a>
                <div className={"my-2"}>

                    <i className="fa fa-trash btn btn-danger float-left" onClick={() => deleteCourse(course.id)}></i>
                    <i className="fa fa-pencil btn btn-warning float-right"></i>
                </div>
            </div>


        </div>
    </div>

export default CourseCard
