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
        fetch("https://immense-peak-55784.herokuapp.com/api/courses")
        // fetch("http://localhost:8080/api/courses")
            .then(response => response.json());

    createCourse = course =>
        fetch("https://immense-peak-55784.herokuapp.com/api/courses"
        // fetch("http://localhost:8080/api/courses"
            , {
                method: 'POST',
                body: JSON.stringify(course),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json());

    deleteCourse = courseId =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/courses/${courseId}`
        // fetch(`http://localhost:8080/api/courses/${courseId}`
            , {
                method: 'DELETE'
            })
            .then(response => response.json());

    findCourseById = courseId =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/courses/${courseId}`)
        // fetch(`http://localhost:8080/api/courses/${courseId}`)
            .then(response => response.json());

    updateCourse = course =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/courses/${course.id}`
        // fetch(`http://localhost:8080/api/courses/${course.id}`
            , {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
}

export default CourseService;