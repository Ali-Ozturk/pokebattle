import {
    CHANGE_TURN,
    REMOVE_FIGHTER_FROM_OPPONENTS,
    SET_MOVE,
    SET_OPPONENT_FIGHTER,
    SET_OPPONENT_FIGHTER_HEALTH,
    SET_OPPONENTS
} from "../types/types";
import update from 'immutability-helper';

const available_moves = {
    "select-move": "Default",
    "select-ability": "Which attack do you want to use?",
}

const INITIAL_STATE = {
    opponents: [],
    move: "select-move",
    opponent_fighter: null,
    turn: "player" // can be player || computer
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_OPPONENTS:
            let newTeamWithHp = [];
            action.fighters.forEach(item => {
                newTeamWithHp = [...newTeamWithHp, update(item, {current_hp: {$set: item.health}})];
            })
            return {...state, opponents: newTeamWithHp};

        case CHANGE_TURN:
            return {...state, turn: action.turn};

        case SET_MOVE:
            return {...state, move: action.move};

        case SET_OPPONENT_FIGHTER:
            const fighter = action.fighter ? action.fighter : state.opponents[0];
            return {...state, opponent_fighter: fighter};

        case SET_OPPONENT_FIGHTER_HEALTH:
            let opponents = state.opponents;
            let opponent_fighter = state.opponent_fighter;

            if (opponent_fighter.id === action.fighter.id) {
                opponent_fighter.current_hp = action.health;
            }

            opponents = opponents.map(fighter => {
                if (fighter.id === action.fighter.id) {
                    fighter.current_hp = action.health;
                }
                return fighter;
            })
            return {...state, opponents, opponent_fighter}

        case REMOVE_FIGHTER_FROM_OPPONENTS:
            const removed_fighter_list = [...state.opponents].filter(item => {
                return item.id !== action.fighter.id
            })
            return {...state, opponents: removed_fighter_list}

        default:
            return state;
    }
}
