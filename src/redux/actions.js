import {CHANGE_SCORE, REMOVE_PLAYER, UPDATE_USER} from "./actionTypes";

export const addPlayer = (name) => ({
    type: UPDATE_USER,
    name
})

export const changeScore = (id, delta) => ({
    type: CHANGE_SCORE,
    id,
    delta
})

export const removePlayer = (id) =>({
    type: REMOVE_PLAYER,
    id
})