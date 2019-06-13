import {
    CREATE_WIDGET,
    DELETE_WIDGET, FIND_ALL_WIDGETS,
    HEADING_SIZE_CHANGED,
    HEADING_TEXT_CHANGED,
    IMAGE_TEXT_CHANGED,
    LINK_TEXT_CHANGED, LINK_URL_CHANGED,
    LIST_TEXT_CHANGED,
    LIST_TYPE_CHANGED,
    PARAGRAPH_TEXT_CHANGED,
    POSITION_DOWN,
    POSITION_UP,
    PREVIEW_SELECT,
    SELECT_WIDGET
} from "../constants";
import WidgetServiceForJSONFile from "../services/WidgetServiceForJSONFile";
import WidgetService from "../services/WidgetService";


const widgetService = WidgetService.getInstance();
// let widgetService = WidgetServiceForJSONFile.getInstance();
// let widgetsArray = widgetService.findAllWidgets();

let initialState = {
    widgets: [],
    preview: "off"
};


const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
        // let widgetTemplate = {
        //     id: idAutoIncrement++,
        //     type: "HEADING",
        //     size: 1,
        //     text: "Heading text"
        // };
        //
        // widgetService.createWidget(widgetTemplate);
        // state.widgets = widgetService.findAllWidgets();
        // return {widgets: [...state.widgets], preview: state.preview};

        case DELETE_WIDGET:
        // widgetService.deleteWidget(action.id);
        // state.widgets = widgetService.findAllWidgets();
        // return {widgets: [...state.widgets], preview: state.preview};

        case SELECT_WIDGET:
        // widgetService.selectWidget(action.id, action.widgetType);
        //
        // state.widgets = widgetService.findAllWidgets();
        // return {widgets: [...state.widgets], preview: state.preview};

        case POSITION_UP:
        // widgetService.moveWidgetUp(action.widget);
        //
        // state.widgets = widgetService.findAllWidgets();
        // return {widgets: [...state.widgets], preview: state.preview};

        case POSITION_DOWN:
        // widgetService.moveWidgetDown(action.widget);
        //
        // state.widgets = widgetService.findAllWidgets();
        // return {widgets: [...state.widgets], preview: state.preview};

        case FIND_ALL_WIDGETS:
            return {
                ...state,
                widgets: action.widgets
            };

        case PREVIEW_SELECT:
            return state.preview == "off" ? {widgets: state.widgets, preview: "on"}
                : {widgets: state.widgets, preview: "off"};


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

        case LINK_TEXT_CHANGED:
            widgetService.updateTextForWidgets(action.id, action.textChanged);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        case LINK_URL_CHANGED:
            widgetService.updateURLForLink(action.id, action.urlChanged);

            state.widgets = widgetService.findAllWidgets();
            return {widgets: [...state.widgets], preview: state.preview};

        default:
            return state;
    }
};

export default widgetReducer