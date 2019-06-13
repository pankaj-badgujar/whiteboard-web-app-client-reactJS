class CourseService {

    static myInstance = null;

    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }

    findAllCourses = () =>
        fetch("http://localhost:8080/api/courses")
            .then(response => response.json());
}

export default CourseService;