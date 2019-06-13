import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseServiceForJSONFile from '../services/CourseServiceForJSONFile.js'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import WidgetListContainer from "./WidgetListContainer";
import Provider from "react-redux/es/components/Provider";
import {createStore} from "redux";
import widgetReducer from '../reducers/WidgetReducer';


let courseService = CourseServiceForJSONFile.getInstance();


const store = createStore(widgetReducer);

class CourseEditor extends React.Component {

    constructor(props) {
        super(props);


        const courseExtracted = courseService.findCourseById(props.match.params.courseId);
        if (courseExtracted.modules.length === 0) {
            console.log("empty")
        }
        this.state = {
            courseId: props.match.params.courseId,
            course: courseExtracted,
            selectedModule: courseExtracted.modules[0],
            selectedLesson: courseExtracted.modules[0].lessons[0],
            selectedTopic: courseExtracted.modules[0].lessons[0].topics[0]
        }

    }

    selectTopic = topic => {
        this.setState({
            selectedTopic: topic
        })
    }


    selectLesson = lesson => {
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })
    }
    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]

        })
    }


    render() {
        return (
            <Router>
                <div>
                    <h2>{this.state.course.title}</h2>
                    <div className="row">
                        <div className="col-4">
                            <ModuleList
                                selectedModule={this.state.selectedModule}
                                selectModule={this.selectModule}
                                courseId={this.state.courseId}
                                modules={this.state.course.modules}/>
                        </div>

                        <div className="col-8">
                            <LessonTabs
                                lessons={this.state.selectedModule.lessons}
                                selectedLesson={this.state.selectedLesson}
                                selectLesson={this.selectLesson}
                                addLesson={this.addLesson}
                            />
                            <TopicPills
                                topics={this.state.selectedLesson.topics}
                                selectedTopic={this.state.selectedTopic}
                                selectTopic={this.selectTopic}
                            />
                            <br/>
                            <Provider store={store}>
                                <WidgetListContainer />
                            </Provider>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default CourseEditor