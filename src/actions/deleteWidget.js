import React from 'react'
import {DELETE_WIDGET} from "../constants";

export const deleteWidget = id => {
    return {
        type:DELETE_WIDGET,
        id: id
    }
};
