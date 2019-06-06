import {LIST_TYPE_CHANGED} from "../constants";

export const listTypeChanged = (id,listType) => {
    return {
        type:LIST_TYPE_CHANGED,
        id : id,
        listType : listType
    }
};