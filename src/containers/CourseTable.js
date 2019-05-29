import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService.js'

class CourseTable extends React.Component {
    render() {

        let courseService = CourseService.getInstance();
        const courses = courseService.findAllCourses();

        return (
            courses.map(course => <CourseRow course={course}/>)

        );

    }
}


export default CourseTable
