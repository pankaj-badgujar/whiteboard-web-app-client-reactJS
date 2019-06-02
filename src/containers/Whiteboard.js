import React from 'react'
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor.js"
import CourseService from "../services/CourseService";
import CourseManager from "./CourseManager";

let courseService = CourseService.getInstance();

export default class Whiteboard extends React.Component {
    constructor(){
        super();

        this.state = {
            course : {
                id : -1,
                title : 'New Course',
                modules:[]
            },
            courses : courseService.findAllCourses()
        }
    }

    addCourse = (event) => {
        courseService.createCourse(this.state.course);
            this.setState({
                courses : courseService.findAllCourses()
            })
    }

    changeCourseTitle = (event) => {
        this.setState({
            course : {
                id : (new Date()).getTime(),
                title: event.target.value,
                modules:[]
            }
        })
    }

    deleteCourse = (courseId) => {
        courseService.deleteCourse(courseId);
    }

    render() {
        return (
            <Router>

                <div className="container">
                    <div className="bg-dark text-center text-white">
                        <h1>Whiteboard</h1>
                    </div>

                        <CourseManager changeCourseTitle={this.changeCourseTitle} addCourse={this.addCourse}/>


                    <Route
                        path="/course-grid"
                        render ={() => <CourseGrid courses={this.state.courses}/>}
                    />
                    <Route
                        path="/course-list"
                        render ={() => <CourseTable courses={this.state.courses} deleteCourse={this.deleteCourse}/>}
                    />
                    <Route
                        path="/course-editor/:id"
                        component={CourseEditor}
                    />

                </div>


            </Router>

        );
    }
}