import { createSlice } from "@reduxjs/toolkit";


export const LudoAction=createSlice({

    name:"ludo",
    initialState:{
        states: {
        red:['H','H','H','H'],
        yellow:['H','H','H','H'],
        green:['H','H','H','H'],
        blue:['H','H','H','H']
        }
    },
    reducers:{
        begin: (state, action) => {
            var player=action.payload['player']
            var index=action.payload['index']
            state.states[player][index] = "O"

            console.log(JSON.stringify(state.states[player]))

        },
        kill:(state, action) => {
            var player=action.payload['player']
            var index=action.payload['index']
            state.states[player][index] = "D"

            console.log(JSON.stringify(state.states[player]))

        },
        pass: (state, action)=>{
            var player=action.payload['player']
            return state.states[player].every(entry => entry === "P")
        }
    }
})

export const { begin, kill, pass } = LudoAction.actions