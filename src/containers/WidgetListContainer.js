import React from 'react';
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";
import {createWidget} from "../actions/createWidget"
import {previewSelect} from "../actions/previewSelect"
import {deleteWidget} from "../actions/deleteWidget";
import {positionUp} from "../actions/positionUp";
import {positionDown} from "../actions/positionDown";

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
            positionDown: (widget) => dispatch(positionDown(widget))
        }
    )
;

const WidgetListContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer