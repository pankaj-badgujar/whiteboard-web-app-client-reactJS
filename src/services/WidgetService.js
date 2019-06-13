
class WidgetService {

    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json());

    createWidget = widget =>
        fetch("http://localhost:8080/api/widgets" , {
            method: 'POST',
            body: JSON.stringify(widget),
            headers:{
                'content-type' : 'application/json'
            }
        })
            .then(response => response.json());
}

export default WidgetService;