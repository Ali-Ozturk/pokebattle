import {
    SELECT_FIGHTER,
    SET_FIGHTER
} from './types';

export const selectFighter = (id, fighter_data) => {
    return {
        type: SELECT_FIGHTER,
        id,
        fighter_data,
    };
};

export const setFighter = fighter => {
    return {
        type: SET_FIGHTER,
        fighter,
    };
};

