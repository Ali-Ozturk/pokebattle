import {SET_LOADING} from "../types/types";

const INITIAL_STATE = {
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: !state.loading,
            };
        default:
            return state;
    }
}
