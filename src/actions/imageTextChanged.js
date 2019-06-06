import {IMAGE_TEXT_CHANGED} from "../constants";

export const imageTextChanged = (id,textChanged) => {
    return {
        type:IMAGE_TEXT_CHANGED,
        id : id,
        textChanged : textChanged
    }
};