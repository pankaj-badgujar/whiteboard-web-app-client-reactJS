class ModuleService {

    static myInstance = null;

    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModule = (courseID, module) =>
        // fetch(`https://immense-peak-55784.herokuapp.com/api/courses/${courseID}/modules`
        fetch(`http://localhost:8080/api/courses/${courseID}/modules`
            , {
                method: 'POST',
                body: JSON.stringify(module),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json());


    findAllModulesForCourse = courseId =>
        fetch(`http://localhost:8080/api/courses/${courseId}/modules`)
            .then(response => response.json());


    deleteModule = moduleId =>
        fetch(`http://localhost:8080/api/modules/${moduleId}`,
            {
                method: 'DELETE'
            }).then(response => response.json());

    updateModule = (moduleId, module) =>
        fetch(`http://localhost:8080/api/modules/${moduleId}`,{
            method: 'PUT',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
}

export default ModuleService;