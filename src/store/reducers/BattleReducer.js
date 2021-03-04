import {
    SET_OPPONENTS
} from "../types/types";

const INITIAL_STATE = {
    opponents: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_OPPONENTS:
            return {...state, opponents: action.fighters};
        default:
            return state;
    }
}
