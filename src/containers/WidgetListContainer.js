import React from 'react';
import {connect} from 'react-redux';
import WidgetList from "../components/WidgetList";


const stateToPropertyMapper = state => (
    {widgets : state.widgets}
);




const dispatcherToPropertyMapper = dispatcher => (
    {

    }
);

const WidgetListContainer =
    connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer