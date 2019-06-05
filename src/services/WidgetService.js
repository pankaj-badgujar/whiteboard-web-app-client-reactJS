import widgetData from './widgets.json'

let widgets = widgetData;

class WidgetService {

    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget(widget){
        widgets.push(widget);
    }

    findAllWidgets(){
        return widgets;
    }

    findWidget(widgetId){

    }

    updateWidget(widgetId, widget){

    }

    deleteWidget(widgetId){

    }

}

export default WidgetService