import React from 'react'

const CourseRow = ({course}) =>


                <tr>
                    <td scope="row"><a href={`/course-editor/${course.id}`}><i className="fa fa-book"></i>  {course.title}</a></td>
                    <td>
                        <div className="d-none d-sm-block"><a href={`/course-editor/${course.id}`}>me</a></div>
                    </td>
                    <td>
                        <div className="d-none d-sm-block"><a href={`/course-editor/${course.id}`}>Yesterday</a></div>
                    </td>

                    <td>
                        <i className="fa fa-trash btn btn-danger"></i>
                    </td>
                    <td>
                        <i className="fa fa-pencil btn btn-warning"></i>
                    </td>
                </tr>




export default CourseRow