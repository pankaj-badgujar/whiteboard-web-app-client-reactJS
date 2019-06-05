import {CREATE_WIDGET, PREVIEW_SELECT} from "../constants";


const widgetReducer = (state = [],action) => {
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