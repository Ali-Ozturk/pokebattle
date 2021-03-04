import {SELECT_FIGHTER} from "../types/types";
import fighter_data from "../../data/fighters";

const INITIAL_STATE = {
    fighters: fighter_data,
    selected_fighter: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_FIGHTER:
            return {
                ...state,
                selected_fighter: action.fighter
            };
        default:
            return state;
    }
}