import React from 'react'
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor.js"
import CourseService from "../services/CourseService";
import CourseNavigationBar from "./CourseNavigationBar";
import LessonTabs from "../components/LessonTabs";


export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.changeCourseTitle = this.changeCourseTitle.bind(this);
        this.courseService = CourseService.getInstance();
        const courses = this.courseService.findAllCourses();

        this.state = {
            course: {
                id: -1,
                title: 'New Course',
                modules: []
            },
            courses: courses,

            selectedCourse : courses[0]
        }

    }

    selectCourse = course => {
            this.setState({selectedCourse : course})
    }

    addCourse = () => {
        this.courseService.createCourse(this.state.course);
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    };

    changeCourseTitle = (event) => {
        this.setState({
            course: {
                id: (new Date()).getTime(),
                title: event.target.value,
                modules: []
            }
        })
    }

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
        this.setState({
            courses: this.courseService.findAllCourses()
        })

    }

    render() {
        return (
            <Router>

                <div className="container">
                    <div className="bg-dark text-center text-white">
                        <h1>Whiteboard</h1>
                    </div>
                    <CourseNavigationBar changeCourseTitle={this.changeCourseTitle} addCourse={this.addCourse}/>


                    <Route
                        path="/course-grid"
                        render={() => <CourseGrid
                            courses={this.state.courses}
                            deleteCourse={this.deleteCourse}
                            selectCourse = {this.selectCourse}
                        />}
                    />
                    <Route
                        path="/course-list"
                        render={() => <CourseTable
                            courses={this.state.courses}
                            deleteCourse={this.deleteCourse}
                            selectCourse = {this.selectCourse}
                        />}
                    />

                    <Route
                        path="/course-editor/:courseId"
                        component={CourseEditor}
                    />

                    <Route
                        path={"/"}
                    />


                </div>


            </Router>

        );
    }
}