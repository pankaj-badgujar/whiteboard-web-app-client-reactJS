import {
    CREATE_WIDGET,
    DELETE_WIDGET, HEADING_SIZE_CHANGED, HEADING_TEXT_CHANGED, IMAGE_TEXT_CHANGED, LIST_TEXT_CHANGED, LIST_TYPE_CHANGED,
    PARAGRAPH_TEXT_CHANGED,
    POSITION_DOWN,
    POSITION_UP,
    PREVIEW_SELECT,
    SELECT_WIDGET
} from "../constants";
import WidgetService from "../services/WidgetService";

let widgetService = WidgetService.getInstance();
const widgetsArray = widgetService.findAllWidgets();

let initialState = {
    widgets: widgetsArray,
    preview: "off"
};

let idAutoIncrement = widgetsArray.length + 1;

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case PREVIEW_SELECT:
            return state.preview == "off" ? {widgets: state.widgets, preview: "on"}
                : {widgets: state.widgets, preview: "off"};

        case CREATE_WIDGET:
            let widgetTemplate = {
                id: idAutoIncrement++,
                type: "HEADING",
                size: 1,
                text: "Heading text"
            };

            widgetService.createWidget(widgetTemplate);
            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case DELETE_WIDGET:
            widgetService.deleteWidget(action.id);
            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case POSITION_UP:
            widgetService.moveWidgetUp(action.widget);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case POSITION_DOWN:
            widgetService.moveWidgetDown(action.widget);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case SELECT_WIDGET:
            widgetService.selectWidget(action.id, action.widgetType);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case PARAGRAPH_TEXT_CHANGED:
            widgetService.updateTextForWidgets(action.id, action.textChanged);
            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case HEADING_TEXT_CHANGED:

            widgetService.updateTextForWidgets(action.id, action.textChanged);
            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case HEADING_SIZE_CHANGED:

            widgetService.updateSizeForHeading(action.id, action.size);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case LIST_TEXT_CHANGED:

            widgetService.updateTextForList(action.id, action.textChanged);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case LIST_TYPE_CHANGED:

            widgetService.updateListTypeForList(action.id, action.listType);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case IMAGE_TEXT_CHANGED:
            widgetService.updateTextForWidgets(action.id, action.textChanged);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        default:
            return state;
    }
};

export default widgetReducer