import React from 'react'
import boardCSS from '../css/board.css'
import Pathways from '../components/pathway.js'
import PlayerHome from './playerHome.js'
import Home from './Home'
import Pawn from './pawn'

export default function board() {
    var redStop = [
        [13, 14, 15, 16, 17, 18],
        [7, 8, 9, 10, 11, 12],
        [6, 5, 4, 3, 2, 1],
    ]
    var redUnkillableStops = [14, 4, 8, 9, 10, 11, 12];
    var greenStop = [
        [24, 25, 31],
        [23, 26, 32],
        [22, 27, 33],
        [21, 28, 34],
        [20, 29, 35],
        [19, 30, 36]
    ]
    var greenUnkillableStops = [22, 32, 26, 27, 28, 29, 30];

    var blueStop = [
        [37, 38, 39, 40, 41, 42],
        [48, 47, 46, 45, 44, 43],
        [54, 53, 52, 51, 50, 49]
    ]
    var blueUnkillableStops = [40, 50, 44, 45, 46, 47, 48];
    var yellowStop = [
        [72, 66, 55],
        [71, 65, 56],
        [70, 64, 57],
        [69, 63, 58],
        [68, 62, 59],
        [67, 61, 60]
    ]
    var yellowUnkillableStops = [58, 68, 62, 63, 64, 65, 66];


    var unkillables =
        [
            yellowUnkillableStops,
            blueUnkillableStops,
            greenUnkillableStops,
            redUnkillableStops
        ]

    return (
        <>
            <div className="board" style={boardCSS}>

                <div className='container1' >
                    <PlayerHome bgColor="red" pawncolor="red" pawn={<Pawn pawncolor="red" />} unkillables={unkillables} pawnArray={['', '', '', '']} />
                    <Pathways stops={redStop} highlighted={redUnkillableStops} stopcolor="redstops" layout="horizontal" color='red' />
                    <PlayerHome bgColor="yellow"pawncolor="yellow" pawn={<Pawn pawncolor="yellow" />} unkillables={unkillables} pawnArray={['', '', '', '']} />
                </div>
                <div className="container2">
                    <Pathways stops={greenStop} highlighted={greenUnkillableStops} stopcolor="greenstops" color='green' />
                    <Home />
                    <Pathways stops={yellowStop} highlighted={yellowUnkillableStops} stopcolor="yellowstops" color='yellow' />
                </div>

                <div className="container3">
                    <PlayerHome bgColor="green" pawncolor="green" pawn={<Pawn pawncolor="green" />} unkillables={unkillables} pawnArray={['', '', '', '']} />
                    <Pathways stops={blueStop} highlighted={blueUnkillableStops} stopcolor="bluestops" layout="horizontal" color='blue' />
                    <PlayerHome bgColor="blue" pawncolor="blue" color="white" pawn={<Pawn pawncolor="blue" />} unkillables={unkillables} pawnArray={['', '', '', '']} />

                </div>

            </div>

        </>
    )
}