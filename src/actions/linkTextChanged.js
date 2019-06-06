import {LINK_TEXT_CHANGED} from "../constants";

export const linkTextChanged = (id,textChanged) => {
    return {
        type:LINK_TEXT_CHANGED,
        id : id,
        textChanged : textChanged
    }
};