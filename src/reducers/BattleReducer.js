import {
    SET_FIGHTER
} from "../actions/types";

const INITIAL_STATE = {
    fighter: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FIGHTER:
            const fighter = action.fighter;
            return { ...state, fighter};

        default:
            return state;
    }
}