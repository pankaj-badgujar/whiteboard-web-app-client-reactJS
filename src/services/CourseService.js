import coursesData from './courses.json'

let courses = coursesData

class CourseService {

    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    createCourse = course => {
        courses.push(course);
    };
    findAllCourses = () => {
        return courses
    };
    findCourseById = courseId => {
        return courses.find(course => course.id === courseId)
    };
    updateCourse = (courseId, newCourse) => {
        courses = courses.map(course => course.id === courseId ? newCourse : course)
    };
    deleteCourse = courseId => {
        courses = courses.filter(course => course.id !== courseId)
    };

    findModuleByModuleId = (courseId, moduleId) => {
        const selectedCourse = courses.find(course => course.id === courseId)
        return module = selectedCourse.modules.find(module => module.id === moduleId)
    };

    createModule = (courseId,module) => {
        const selectedCourse = courses.find(course => course.id === courseId);
        selectedCourse.modules.push(module);
        console.log(selectedCourse.modules);
    };

    deleteModule = (courseId, moduleId) => {
        console.log("here again")
        const selectedCourse = courses.find(course => course.id === courseId);
        selectedCourse.modules = selectedCourse.modules.filter(module => module.id !== moduleId)
        console.log(selectedCourse.modules)
        console.log("out")
    }

}

export default CourseService