import React from 'react'
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor.js"
import CourseService from "../services/CourseService";
import CourseManager from "./CourseManager";

export default class Whiteboard extends React.Component {

    constructor(){
        super();
        let courseService = CourseService.getInstance();
        this.state = {
            course : {
                id : -1,
                title : 'New Course'
            },
            courses : courseService.findAllCourses()
        }
    }


    render() {
        return (
            <Router>

                <div className="container">
                    <div className="bg-dark text-center text-white">
                        <h1>Whiteboard</h1>
                    </div>

                        <CourseManager/>


                    <Route
                        path="/course-grid"
                        render ={() => <CourseGrid courses={this.state.courses}/>}
                    />
                    <Route
                        path="/course-list"
                        render ={() => <CourseTable courses={this.state.courses}/>}
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