import {HEADING_TEXT_CHANGED} from "../constants";

export const headingTextChanged = (id,textChanged) => {
    return {
        type:HEADING_TEXT_CHANGED,
        id : id,
        textChanged : textChanged
    }
};