import React from 'react'
import {POSITION_DOWN} from "../constants";

export const positionDown = widget => {
    return{
        type:POSITION_DOWN,
        widget:widget
    }
}
