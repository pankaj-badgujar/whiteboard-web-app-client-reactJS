import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseService from '../services/CourseService.js'

const CourseEditor = ({match}) => {

    let courseService = CourseService.getInstance();
    const courseId = match.params.id;
    const course = courseService.findCourseById(courseId);

    return (
        <div>
        <h2>{course.title}</h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList modules={course.modules}/>
                </div>
                <div className="col-8">
                    <LessonTabs lessons={course.modules.lessons}/>
                    <br/>
                    <TopicPills/>
                </div>
            </div>
        </div>
    );
}


/*const CourseEditor = ({match}) => {

    let courseService = CourseService.getInstance();
    const courseId = match.params.id;
    const course = courseService.findCourseById(courseId);

    return (
        <div>
            <h2>{course.title}{courseId}</h2>

            <div className="row">

                <div className="col-4">
                    <ModuleList modules={course.modules}/>
                </div>

                <div className="col-8">
                    <LessonTabs/>
                    <br/>
                    <TopicPills/>
                </div>

            </div>
        </div>

    );
}*/

export default CourseEditor