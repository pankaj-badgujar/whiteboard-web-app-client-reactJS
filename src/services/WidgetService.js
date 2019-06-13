
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
            .then(response => response.json())
}

export default WidgetService;