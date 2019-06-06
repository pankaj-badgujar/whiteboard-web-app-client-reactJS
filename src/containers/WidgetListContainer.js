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
const stateToPropertyMapper = state => (
    {
        widgets: state.widgets,
        preview: state.preview
    }
);


const dispatcherToPropertyMapper = dispatch => (
        {
            createWidget: () => createWidget(dispatch),
            previewSelect: () => previewSelect(dispatch),
            deleteWidget: (id) => dispatch(deleteWidget(id)),
            positionUp: (widget) => dispatch(positionUp(widget)),
            positionDown: (widget) => dispatch(positionDown(widget)),
            selectWidget:(widgetId,widgetType) =>dispatch(selectWidget(widgetId,widgetType)),
            paragraphTextChanged: (widgetId,textChanged) => dispatch(paragraphTextChanged(widgetId,textChanged)),
            headingTextChanged: (widgetId,textChanged) => dispatch(headingTextChanged(widgetId,textChanged)),
            headingSizeChanged: (widgetId,size) => dispatch(headingSizeChanged(widgetId,size)),
            listTextChanged: (widgetId,textChanged) => dispatch(listTextChanged(widgetId,textChanged)),
            listTypeChanged:(widgetId,listType) => dispatch(listTypeChanged(widgetId,listType)),
            imageTextChanged:(widgetId,textChanged) => dispatch(imageTextChanged(widgetId,textChanged)),
            linkURLChanged : (widgetId,urlChanged) => dispatch(linkURLChanged(widgetId,urlChanged)),
            linkTextChanged: (widgetId,textChanged) => dispatch(linkTextChanged(widgetId,textChanged))
        }
    )
;

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer