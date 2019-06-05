import {CREATE_WIDGET, PREVIEW_SELECT} from "../constants";
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
            console.log(widgetService.findAllWidgets());
            return { widgets : [...state.widgets,widgetTemplate]};
        default:
            return state;
    }
};

export default widgetReducer