import {
    SELECT_FIGHTER,
    SET_LOADING, SET_OPPONENTS
} from '../types/types';

export const selectFighter = (fighter) => {
    return {
        type: SELECT_FIGHTER,
        fighter,
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING,
    }
}

export const setOpponents = fighters => {
    return {
        type: SET_OPPONENTS,
        fighters
    }
}
