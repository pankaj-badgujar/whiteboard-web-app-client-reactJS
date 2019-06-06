import {LIST_TEXT_CHANGED} from "../constants";

export const listTextChanged = (id,textChanged) => {
    return {
        type:LIST_TEXT_CHANGED,
        id : id,
        textChanged : textChanged
    }
};