import {
    REMOVE_FIGHTER_FROM_OPPONENTS,
    SELECT_FIGHTER,
    SET_LOADING,
    SET_MOVE,
    SET_OPPONENT_FIGHTER,
    SET_OPPONENT_FIGHTER_HEALTH,
    SET_OPPONENTS
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

/* Battle state related */
export const setMove = move => {
    return {
        type: SET_MOVE,
        move
    }
}
export const setOpponentFighter = fighter => {
    return {
        type: SET_OPPONENT_FIGHTER,
        fighter
    }
}
export const setOpponentFighterHealth = (fighter, health) => {
    return {
        type: SET_OPPONENT_FIGHTER_HEALTH,
        fighter,
        health
    }
}
export const removeOpponentFighter = fighter => {
    return {
        type: REMOVE_FIGHTER_FROM_OPPONENTS,
        fighter
    }
}
