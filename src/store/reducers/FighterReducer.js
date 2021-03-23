import {REMOVE_MY_FIGHTER, SELECT_FIGHTER, SET_FIGHTER_HEALTH} from "../types/types";
import fighter_data from "../../data/fighters";

const INITIAL_STATE = {
    fighters: fighter_data,
    selected_fighter: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_FIGHTER:
            return {
                ...state,
                selected_fighter: {...action.fighter, current_hp: action.fighter.health}
            };
        case SET_FIGHTER_HEALTH:
            let updated_fighter = state.selected_fighter;

            updated_fighter.current_hp = action.health;

            return {
                ...state,
                selected_fighter: updated_fighter,
            };
        case REMOVE_MY_FIGHTER:
            return {
                ...state,
                selected_fighter: {},
            }
        default:
            return state;
    }
}
