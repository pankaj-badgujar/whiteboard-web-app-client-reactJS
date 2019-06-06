import {HEADING_SIZE_CHANGED} from "../constants";

export const headingSizeChanged = (id,size) => {
    return {
        type:HEADING_SIZE_CHANGED,
        size : size,
        id : id
    }
};