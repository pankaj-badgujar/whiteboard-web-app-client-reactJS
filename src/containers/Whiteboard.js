import React from 'react'
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor.js"
import CourseService from "../services/CourseService";
import CourseManager from "./CourseManager";



export default class Whiteboard extends React.Component {
    constructor(props){
        super(props);
        this.courseService = CourseService.getInstance();
        this.state = {
            course : {
                id : -1,
                title : 'New Course',
                modules:[]
            },
            courses : this.courseService.findAllCourses()
        }
    }

    addCourse = () => {
        this.setState({
            course : {
                id : (new Date()).getTime()
            }
        });
        this.courseService.createCourse(this.state.course);
            this.setState({
                courses : this.courseService.findAllCourses()
            })
    };

    changeCourseTitle = (event) => {
        this.setState({
            course : {
                title: event.target.value,
                modules:[]
            }
        })
    }

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
        this.setState({
            courses : this.courseService.findAllCourses()
        })

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
                        render ={() => <CourseGrid courses={this.state.courses} deleteCourse={this.deleteCourse}/>}
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