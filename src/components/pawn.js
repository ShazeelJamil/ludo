// eslint-disable-next-line
import React, { useRef } from 'react';
import pawnCSS from '../css/pawnCSS.css'
import { gsap } from 'gsap';



export default function Pawn(props) {

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

    var status = true;
    const playAnimation = () => {
        console.log("Animation");
        if (status === true) {
            status = false;
            gsap.to(".pawn",
                {
                    x: 100,
                    duration: 1,
                });
        }
        else {
            status=true;
            gsap.to(".pawn",
                {
                    x: 0,
                    duration: 1,
                });
        }

    }

    return (
        <div className={"pawn " + pawnClass} style={pawnCSS} onClick={playAnimation}>
            {/* <h2 className='pawnDesc' >*</h2> */}
        </div>
    )
}
