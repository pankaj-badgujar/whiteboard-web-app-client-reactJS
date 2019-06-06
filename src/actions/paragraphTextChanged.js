import {PARAGRAPH_TEXT_CHANGED} from "../constants";

export const paragraphTextChanged = (id,textChanged) => {
    return {
        type:PARAGRAPH_TEXT_CHANGED,
        id : id,
        textChanged : textChanged
    }
};