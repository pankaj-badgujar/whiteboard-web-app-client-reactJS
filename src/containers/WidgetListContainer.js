import React from 'react';
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";
import {createWidget} from "../actions/createWidget"
import {previewSelect} from "../actions/previewSelect"
import {deleteWidget} from "../actions/deleteWidget";
import {positionUp} from "../actions/positionUp";
import {positionDown} from "../actions/positionDown";
import {selectWidget} from "../actions/selectWidget";
import {paragraphTextChanged} from "../actions/paragraphTextChanged";
import {headingTextChanged} from "../actions/headingTextChanged";
import {headingSizeChanged} from "../actions/headingSizeChanged";
import {listTextChanged} from "../actions/listTextChanged";
import {listTypeChanged} from "../actions/listTypeChanged";
import {imageTextChanged} from "../actions/imageTextChanged";
import {linkTextChanged} from "../actions/linkTextChanged";
import {linkURLChanged} from "../actions/linkURLChanged"
import WidgetService from "../services/WidgetService";
import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    PARAGRAPH_TEXT_CHANGED,
    POSITION_DOWN,
    POSITION_UP,
    SELECT_WIDGET, UPDATE_WIDGET
} from "../constants";

const service = WidgetService.getInstance();
let idAutoIncrement;
const stateToPropertyMapper = state => (
    {
        widgets: state.widgets,
        preview: state.preview
    }
);


const dispatcherToPropertyMapper = dispatch => (
        {

            previewSelect: () => previewSelect(dispatch),

            findAllWidgets: () =>
                service
                    .findAllWidgets()
                    .then(widgets => {
                        idAutoIncrement = widgets.length + 1;
                        dispatch({type: FIND_ALL_WIDGETS, widgets: widgets})
                    }),

            createWidget: () =>
                service
                    .createWidget({
                        id: idAutoIncrement++,
                        type: "HEADING",
                        size: 1,
                        text: "Heading text"
                    })
                    .then(widgets => dispatch({type: CREATE_WIDGET, widgets: widgets})),

            deleteWidget: widgetId =>
                service
                    .deleteWidget(widgetId)
                    .then(widgets => dispatch({type: DELETE_WIDGET, widgets: widgets})),

            selectWidget: (widget, widgetType) => {
                widget.type = widgetType;
                service
                    .updateWidget(widget)
                    .then(widgets => dispatch({type: UPDATE_WIDGET, widgets: widgets}))
            },

            positionUp: widgetId =>
                service
                    .moveWidgetUpInList(widgetId)
                    .then(widgets => dispatch({type: POSITION_UP, widgets: widgets})),

            positionDown: widgetId =>
                service
                    .moveWidgetDownInList(widgetId)
                    .then(widgets => dispatch({type: POSITION_DOWN, widgets: widgets})),

            textChanged: (widget, textChanged) => {
                widget.text = textChanged;
                service.updateWidget(widget)
                    .then(widgets => dispatch({type: UPDATE_WIDGET, widgets: widgets}))
            },

            headingSizeChanged: (widget, size) => {
                widget.size = size;
                service.updateWidget(widget)
                    .then(widgets => dispatch({type: UPDATE_WIDGET, widgets: widgets}))
            },

            urlChanged: (widget, url) => {
                widget.url = url;
                service.updateWidget(widget)
                    .then(widgets => dispatch({type: UPDATE_WIDGET, widgets: widgets}))
            },

            listTypeChanged: (widget, listType) => {
                widget.listType = listType;
                service.updateWidget(widget)
                    .then(widgets => dispatch({type: UPDATE_WIDGET, widgets: widgets}))
            }

        }
    )
;

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer