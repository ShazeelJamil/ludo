import React from 'react'
import boardCSS from '../css/board.css'
import Pathways from '../components/pathway.js'
import PlayerHome from './playerHome.js'
import Home from './Home'

export default function board() {
    var stops = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ]
    var stopVerticalUpHighlights = [
        5, 7, 6, 8, 11, 14, 17
    ]
    var stopVerticalDownHighlights = [
        2, 5, 8, 11, 14, 13, 12
    ]
    // var stopHorizontaleft = [
    //     [1, 2, 3, 4, 5, 6],
    //     [7, 8, 9, 10, 11, 12],
    //     [13, 14, 15, 16, 17, 18]
    // ]
    var stopHorizontalLeftHighlights = [
        2, 8, 9, 10, 11, 12, 15
    ]
    var stopHorizontalRightHighlights = [
        4, 7, 8, 9, 10, 11, 17
    ]

    return (
        <>
            <div className="board" style={boardCSS}>


                <div className='container1' >
                    <PlayerHome bgColor="red" />
                    <Pathways stops={stops} highlighted={stopHorizontalLeftHighlights} stopcolor="red" layout="horizontal" />
                    <PlayerHome bgColor="yellow" />
                </div>

                <div className="container2">
                    <Pathways stops={stops} highlighted={stopVerticalUpHighlights} stopcolor="red" />
                    <Home />
                    <Pathways stops={stops} highlighted={stopVerticalDownHighlights} stopcolor="red" />
                </div>

                <div className="container3">
                    <PlayerHome bgColor="green" />
                    <Pathways stops={stops} highlighted={stopHorizontalRightHighlights} stopcolor="red" layout="horizontal" />
                    <PlayerHome bgColor="blue" color="white" />

                </div>

            </div>

        </>
    )
}