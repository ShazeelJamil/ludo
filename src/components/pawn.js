import React from 'react'
import pawnCSS from '../css/pawnCSS.css'


export default function pawn(props) {

    var pawnClass;
    if (props.pawncolor === 'green') {
        pawnClass = "pawngreen"
    }
    else if (props.pawncolor === 'blue') {
        pawnClass = "pawnblue"
    }
    else if (props.pawncolor === 'yellow') {
        pawnClass = "pawnyellow"
    }
    else {
        pawnClass = "pawnred"
    }

    return (
        <div className={"pawn " + pawnClass} style={pawnCSS} >
            {/* <h2 className='pawnDesc' >*</h2> */}
        </div>
    )
}
