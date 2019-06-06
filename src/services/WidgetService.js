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

    createWidget(widget) {
        widgets.push(widget);
    }


    findAllWidgets() {
        return widgets;
    }

    findWidget(widgetId) {

    }

    updateWidget(widgetId, widget) {

    }

    moveWidgetUp(widget){
        const index = widgets.indexOf(widget);
        this.deleteWidget(widget.id);
        widgets.splice(index-1,0,widget);
    }

    moveWidgetDown(widget){
        const index = widgets.indexOf(widget);
        this.deleteWidget(widget.id);
        widgets.splice(index+1,0,widget);
    }

    deleteWidget(widgetId) {
        widgets = widgets.filter(widget => widget.id !== widgetId);
    }

}

export default WidgetService