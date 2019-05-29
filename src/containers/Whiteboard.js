import React from 'react'
import CourseManager from "./CourseManager";
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
                    <CourseManager/>
                    <Link to="/course-list">List</Link>
                    <Link to="/course-grid">Grid</Link>
                    <Link to="/course-editor/123">Editor</Link>


                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>

                            <th scope="col">
                                <div className="d-none d-sm-block">Owned By</div>
                            </th>
                            <th scope="col">
                                <div className="d-none d-sm-block">Last modified</div>
                            </th>
                            <th scope="col">
                                <div className="d-none d-sm-block">
                                    <button type="button" className="btn"><i className="fa fa-th"></i></button>
                                </div>
                            </th>
                            <th scope="col">
                                <div className="d-none d-sm-block">
                                    <button type="button" className="btn"><i className="fa fa-sort"></i>
                                    </button>
                                </div>
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                    </table>


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