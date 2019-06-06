import {LINK_URL_CHANGED} from "../constants";

export const linkURLChanged = (id,urlChanged) => {
    return {
        type:LINK_URL_CHANGED,
        id : id,
        urlChanged : urlChanged
    }
};