import React from 'react'
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CourseGrid from "./CourseGrid";
import CourseEditor from "./CourseEditor.js"
import CourseServiceForJSONFile from "../services/CourseServiceForJSONFile";
import CourseNavigationBar from "./CourseNavigationBar";
import LessonTabs from "../components/LessonTabs";
import CourseService from "../services/CourseService";

export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.changeCourseTitle = this.changeCourseTitle.bind(this);
        // this.courseService = CourseServiceForJSONFile.getInstance();
        this.courseService = CourseService.getInstance();

        this.state = {
            courses: []
        };
    }

    componentDidMount = () => this.findAllCourses();

    findAllCourses = () =>
        this.courseService
            .findAllCourses()
            .then(courses => this.setState({
                courses: courses
            }));



    addCourse = () => {
        this.courseService.createCourse(this.state.course)
            .then(() => this.findAllCourses());
    };

    changeCourseTitle = (event) => {
        this.setState({
            course: {
                id: (new Date()).getTime(),
                title: event.target.value,
                modules: []
            }
        })
    };

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then(() => this.findAllCourses());
    };

    updateCourse = (courseId,newTitle) =>{
        const newCourse = {
            "id" : courseId,
            "title" : newTitle
        };
        this.courseService.updateCourse(newCourse).then(() => this.findAllCourses());

    } ;

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
                            selectCourse={this.selectCourse}
                            updateCourse={this.updateCourse}
                        />}
                    />
                    <Route
                        path="/course-list"
                        render={() => <CourseTable
                            courses={this.state.courses}
                            deleteCourse={this.deleteCourse}
                            selectCourse={this.selectCourse}
                            updateCourse={this.updateCourse}
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