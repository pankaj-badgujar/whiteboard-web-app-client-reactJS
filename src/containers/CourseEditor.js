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
import CourseService from "../services/CourseService";


let courseService = CourseService.getInstance();


const store = createStore(widgetReducer);

class CourseEditor extends React.Component {

    constructor(props) {
        super(props);




        this.state = {
            courseId: '',
            course: ''
            // selectedModule: courseExtracted.modules[0],
            // selectedLesson: courseExtracted.modules[0].lessons[0],
            // selectedTopic: courseExtracted.modules[0].lessons[0].topics[0]
        }

    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(nextProps) {
        this.selectCourse(nextProps.match.params.courseId);
    }

    selectCourse = courseId => {
        this.setState({
            courseId: courseId,
        });
        courseService.findCourseById(courseId)
            .then(course => this.setState({course : course}) )
    };

    selectTopic = topic => {
        this.setState({
            selectedTopic: topic
        })
    };


    selectLesson = lesson => {
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        })
    };

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]

        })
    };


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
                            {this.state.selectedModule !== undefined && <LessonTabs
                                lessons={this.state.selectedModule.lessons}
                                selectedLesson={this.state.selectedLesson}
                                selectLesson={this.selectLesson}
                                addLesson={this.addLesson}
                            />}
                            {this.state.selectedModule !== undefined
                            && this.state.selectedLesson !== undefined
                            &&
                            <TopicPills
                                topics={this.state.selectedLesson.topics}
                                selectedTopic={this.state.selectedTopic}
                                selectTopic={this.selectTopic}
                            />}

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