import { createSlice } from "@reduxjs/toolkit";


export const LudoAction = createSlice({

    name: "ludo",
    initialState: {
        states: {
            red: ['H', 'H', 'H', 'H'],
            yellow: ['H', 'H', 'H', 'H'],
            green: ['H', 'H', 'H', 'H'],
            blue: ['H', 'H', 'H', 'H']
        },
        score: 0,
        playerCount: 4
    },
    reducers: {
        begin: (state, action) => {
            var player = action.payload['player']
            var index = action.payload['index']
            state.states[player][index] = "O"

            // console.log(JSON.stringify(state.states[player]))

        },
        kill: (state, action) => {
            var player = action.payload['player']
            var index = action.payload['index']
            state.states[player][index] = "D"

            // console.log(JSON.stringify(state.states[player]))

        },
        pass: (state, action) => {
            var player = action.payload['player']
            return state.states[player].every(entry => entry === "P")
        },
        setScore: (state, action) => {
            var score = action.payload['score']
            state.score = score
            // console.log("score-> " + typeof (score)+"-----" + score)
        },
        setCurrentPlayerCount: (state, action) => {
            var PlayerCount = action.payload['playerCount']
            state.playerCount = PlayerCount
        },
    }
})

export const { begin, kill, pass, setScore, setCurrentPlayerCount } = LudoAction.actions