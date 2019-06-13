import widgetData from './widgets.json'

let widgets = widgetData;

class WidgetServiceForJSONFile {

    static myInstance = null;

    static getInstance() {
        if (WidgetServiceForJSONFile.myInstance == null) {
            WidgetServiceForJSONFile.myInstance =
                new WidgetServiceForJSONFile();
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
        const index = this.findIndexOfWidget(widgetId);
        const newWidget = this.getWidgetTemplateFromWidgetType(widgetId,widgetType);
        this.deleteWidget(widgetId);
        widgets.splice(index,0,newWidget);
    }

    getWidgetTemplateFromWidgetType(idToBeAssigned,widgetType){
        switch(widgetType){
            case "HEADING":
                return {
                    "id" : idToBeAssigned,
                    "type": "HEADING",
                    "size": 1,
                    "text": "Heading text"
                };
            case "PARAGRAPH":
                return {
                    "id" : idToBeAssigned,
                    "type": "PARAGRAPH",
                    "text": "Paragraph text"
                };
            case "LIST":
                return {
                    "id" : idToBeAssigned,
                    "type": "LIST",
                    "listType" : "unordered",
                    "items": "Enter\none\nlist\nper\nitem"
                };

            case "IMAGE":
                return {
                    "id" : idToBeAssigned,
                    "type": "IMAGE",
                    "text": "Image URL"
                };

            case "LINK":
                return {
                    "id" : idToBeAssigned,
                    "type": "LINK",
                    "text": "Link Text",
                    "href": "Link URL"
                };
            default:
                return null;
        }
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

    updateTextForList(widgetId,textChanged){
        widgets[this.findIndexOfWidget(widgetId)].items = textChanged;
    }

    updateSizeForHeading(widgetId,size){
        widgets[this.findIndexOfWidget(widgetId)].size = size;
    }

    updateListTypeForList(widgetId,listType){
        widgets[this.findIndexOfWidget(widgetId)].listType = listType;
    }

    updateURLForLink(widgetId,url){
        widgets[this.findIndexOfWidget(widgetId)].href = url;
    }

}

export default WidgetServiceForJSONFile