import {CHANGE_SCORE, REMOVE_PLAYER, UPDATE_USER} from "../actionTypes";

let maxId = 4;

const playerInitialState = {
    title: 'My Scoreboard',
    players: [
        {name:'LDK', id: 1, score:0 },
        {name:'HONG', id: 2, score:0},
        {name:'KIM', id: 3, score:0},
        {name:'PARK', id: 4, score:0},
    ]
}

export const playerReducer = (state = playerInitialState, action) => {
    switch (action.type){
        case UPDATE_USER:
            state.players.push({
                name:action.name,
                id: ++maxId,
                score: 0
                });
                return {
                    ...state,
                    players: [...state.players]
                }
        case CHANGE_SCORE:
            state.players.forEach(player => {
                if(player.id === action.id){
                    player.score += action.delta;
                }
            })
            return {
                ...state,
                players: [...state.players]
            }
        case REMOVE_PLAYER:
            const players = state.players.filter(player => player.id !== action.id)
            return{
                ...state,
                players
            }

        default:
            return state;
    }
}