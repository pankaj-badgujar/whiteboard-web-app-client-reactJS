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
            return widgets.filter(widget => widget.id === widgetId);
    }

    selectWidget(widgetId, widgetType) {
        widgets[this.findIndexOfWidget(widgetId)].type=widgetType;
    }

    findIndexOfWidget(widgetId){
        return  widgets.findIndex(function (widget) {
            return widget.id == widgetId
        });
    }
    moveWidgetUp(widget) {
        const index = widgets.indexOf(widget);
        this.deleteWidget(widget.id);
        widgets.splice(index - 1, 0, widget);
    }

    moveWidgetDown(widget) {
        const index = widgets.indexOf(widget);
        this.deleteWidget(widget.id);
        widgets.splice(index + 1, 0, widget);
    }

    deleteWidget(widgetId) {
        widgets = widgets.filter(widget => widget.id !== widgetId);
    }

    updateTextForWidgets(widgetId, textChanged){
        widgets[this.findIndexOfWidget(widgetId)].text = textChanged;
    }

    updateSizeForHeading(widgetId,size){
        widgets[this.findIndexOfWidget(widgetId)].size = size;
    }

}

export default WidgetService