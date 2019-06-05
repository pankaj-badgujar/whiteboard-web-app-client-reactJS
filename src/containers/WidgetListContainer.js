import React from 'react';
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";
import {createWidget} from "../actions/createWidget"
import {previewSelect} from "../actions/previewSelect"

const stateToPropertyMapper = state => (
    {widgets: state.widgets}
);


const dispatcherToPropertyMapper = dispatch => (
    {
        createWidget: () => createWidget(dispatch),
        previewSelect:() => previewSelect(dispatch)
}
)
;

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer