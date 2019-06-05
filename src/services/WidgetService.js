import coursesData from './courses.json'

let courses = coursesData;

class CourseService {

    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createWidget(topicId, widget){
        

    }

    findWidgets(topicId){

    }

    findWidget(widgetId){

    }

    updateWidget(widgetId, widget){

    }

    deleteWidget(widgetId){

    }

}

export default CourseService