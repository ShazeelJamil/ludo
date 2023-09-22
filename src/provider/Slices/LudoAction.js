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
        passedCount: {
            red: 1,
            yellow: 1,
            green: 1,
            blue: 1,
        },
        score: 0,
        playerCount: 4,
        recentlyPassedRed: [],
        recentlyPassedYellow: [],
        recentlyPassedGreen: [],
        recentlyPassedBlue: [],

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
        setScore: (state, action) => {
            var score = action.payload['score']
            state.score = score
            // console.log("score-> " + typeof (score)+"-----" + score)
        },
        setCurrentPlayerCount: (state, action) => {
            var PlayerCount = action.payload['playerCount']
            state.playerCount = PlayerCount
        },
        setRecentlyPassedpawn: (state, action) => {
            // state.recentlyPassed.push(action.payload);
            const id = action.payload['id']
            // const index = id[id.length - 1];
            var player;
            if (id.includes('red')) {
                player = 'red'
                state.recentlyPassedRed.push(action.payload)
            }
            else if (id.includes('green')) {
                player = 'green'
                state.recentlyPassedGreen.push(action.payload)
            }
            else if (id.includes('yellow')) {
                player = 'yellow'
                state.recentlyPassedYellow.push(action.payload)
            }
            else if (id.includes('blue')) {
                player = 'blue'
                state.recentlyPassedBlue.push(action.payload)
            }
            state.passedCount[player] += 1;

            console.log('Inside state' + state.passedCount[player])
        }
    }
})

export const { begin, kill, setScore, setCurrentPlayerCount, setRecentlyPassedpawn } = LudoAction.actions