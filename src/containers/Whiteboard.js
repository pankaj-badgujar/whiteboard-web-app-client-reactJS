import React from 'react'
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor.js"

export default class Whiteboard extends React.Component {


    render() {
        return (
            <Router>

                <div className="container">
                    <div className="bg-dark text-center text-white">
                        <h1>Whiteboard</h1>
                    </div>

                    <Link to="/course-list">Courses</Link>


                    <Route
                        path="/course-grid"
                        component={CourseGrid}
                    />
                    <Route
                        path="/course-list"
                        component={CourseTable}
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