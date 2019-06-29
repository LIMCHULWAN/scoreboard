import {UPDATE_USER} from "../actionTypes";

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
        default:
            return state;
    }
}