import {CREATE_WIDGET, PREVIEW_SELECT} from "../constants";
import WidgetService from "../services/WidgetService";

let widgetService = WidgetService.getInstance();
const widgetsArray = widgetService.findAllWidgets();

let initialState = {
  widgets :widgetsArray
};

console.log(initialState);
console.log(widgetsArray);
const widgetReducer = (state = initialState,action) => {
    switch(action.type){
        case PREVIEW_SELECT:
            alert('now did select');
            return state;
        case CREATE_WIDGET:
            alert('now added');
            return state;
        default: return state
    }
};

export default widgetReducer