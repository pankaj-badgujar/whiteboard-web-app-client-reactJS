import React from 'react'
import CourseCard from "../components/CourseCard";
import CourseService from '../services/CourseService.js'



class CourseGrid extends React.Component{
    render() {
        let courseService = CourseService.getInstance();
        const courses = courseService.findAllCourses();

        return (
            <div>

                <div className="card-deck container-fluid">
                    {courses.map(course => <CourseCard course={course}/>)}
                </div>
            </div>
        );
    }
}


export default CourseGrid