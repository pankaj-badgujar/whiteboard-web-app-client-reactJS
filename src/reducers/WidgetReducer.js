import {CREATE_WIDGET, DELETE_WIDGET, PREVIEW_SELECT} from "../constants";
import WidgetService from "../services/WidgetService";

let widgetService = WidgetService.getInstance();
const widgetsArray = widgetService.findAllWidgets();

let initialState = {
    widgets: widgetsArray
};

let idAutoIncrement = widgetsArray.length + 1;

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case PREVIEW_SELECT:
            alert('now did select');

        case CREATE_WIDGET:
            let widgetTemplate = {
                id: idAutoIncrement++,
                type: "HEADING",
                size: 1,
                text: "The Document Object Model"
            };
            widgetService.createWidget(widgetTemplate);
            return {widgets: [...state.widgets, widgetTemplate]};

        case DELETE_WIDGET:
            widgetService.deleteWidget(action.id);
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.id)
            };
        default:
            return state;
    }
};

export default widgetReducer