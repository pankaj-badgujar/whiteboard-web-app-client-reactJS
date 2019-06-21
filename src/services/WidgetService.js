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
        // fetch("http://localhost:8080/api/widgets")
        fetch("https://immense-peak-55784.herokuapp.com/api/widgets")
            .then(response => response.json());

    createWidget = widget =>

        fetch("https://immense-peak-55784.herokuapp.com/api/widgets"
        // fetch("http://localhost:8080/api/widgets"
            , {
                method: 'POST',
                body: JSON.stringify(widget),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json());

    deleteWidget = widgetId =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/widgets/${widgetId}`
        // fetch(`http://localhost:8080/api/widgets/${widgetId}`
            , {
                method: 'DELETE'
            }).then(response => response.json());

    updateWidget = (widget) =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/widgets/${widget.id}`
        // fetch(`http://localhost:8080/api/widgets/${widget.id}`
            , {
                method: 'PUT',
                body: JSON.stringify(widget),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json());

    selectWidget = (widgetId, widgetType) => {
        let widgetToBeChanged = this.findWidgetById(widgetId);
        widgetToBeChanged.type = widgetType;
        return this.updateWidget(widgetToBeChanged)
    };

    findWidgetById = widgetId =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/widgets/${widgetId}`)
        // fetch(`http://localhost:8080/api/widgets/${widgetId}`)
            .then(response => response.json());

    moveWidgetUpInList = widgetId =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/widgets/${widgetId}?direction=UP`
        // fetch(`http://localhost:8080/api/widgets/${widgetId}?direction=UP`
            , {
                method: 'POST'
            })
            .then(response => response.json());


    moveWidgetDownInList = widgetId =>
        fetch(`https://immense-peak-55784.herokuapp.com/api/widgets/${widgetId}?direction=DOWN`
        // fetch(`http://localhost:8080/api/widgets/${widgetId}?direction=DOWN`
            , {
                method: 'POST'
            })
            .then(response => response.json());

}

export default WidgetService;