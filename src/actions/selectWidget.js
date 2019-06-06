import React from 'react';
import {SELECT_WIDGET} from "../constants";

export const selectWidget = (widgetId, widgetType) => {
    return{
        type: SELECT_WIDGET,
        widgetType : widgetType,
        id : widgetId
    }
};