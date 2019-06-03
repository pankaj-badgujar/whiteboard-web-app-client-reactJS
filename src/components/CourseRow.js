import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, deleteCourse, selectCourse}) =>


    <tr>

        <td scope="row"><Link to={`/course-editor/${course.id}`} onClick={() => selectCourse(course)}><i className="fa fa-book"></i> {course.title}</Link>
            </td>
            <td>
                <div className="d-none d-sm-block"><Link to={`/course-editor/${course.id}`} onClick={() => selectCourse(course)}>me</Link></div>
            </td>
            <td>
                <div className="d-none d-sm-block"><Link to={`/course-editor/${course.id}`} onClick={() => selectCourse(course)}>Yesterday</Link></div>
            </td>

            <td>
                <i className="fa fa-trash btn btn-danger" onClick={() => deleteCourse(course.id)}></i>
            </td>
            <td>
                <Link to={`/course-editor/${course.id}`} onClick={() => selectCourse(course)}><i className="fa fa-pencil btn btn-warning"></i></Link>
            </td>

    </tr>


export default CourseRow