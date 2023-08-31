
// import React, { useState } from 'react';
import pawnCSS from '../css/pawnCSS.css'

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

    // const [position, setPosition] = useState({ x: 0, y: 0 })

    // const playAnimation = (event) => {
    //     console.log("Animation");
    //     const targetPawn=event.target;
    //     const newX = position.x + 100;
    //     const newY = position.y + 100;
    //     gsap.to(targetPawn,
    //         {
    //             x: newX,
    //             y: newY,
    //             duration: 1,
    //         });
    //     setPosition({ x: newX, y: newY })
    // }

    // const [positions, setPositions] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

    // const playAnimation = (index) => {
    //     console.log("Animation");
    //     const targetPawn = document.getElementsByClassName("pawn")[index];
    //     const prevX = positions[index].x;
    //     const prevY = positions[index].y;
    //     const newX = prevX + 100;
    //     const newY = prevY + 100;
    //     gsap.fromTo(
    //         targetPawn,
    //         { x: prevX, y: prevY },
    //         {
    //             x: newX,
    //             y: newY,
    //             duration: 1,
    //         }
    //     );
    //     const updatedPositions = [...positions];
    //     updatedPositions[index] = { x: newX, y: newY };
    //     setPositions(updatedPositions);
    // };

    return (
        <div className="pawnHomeDiv" style={pawnCSS}>
            <div className={`pawn ${pawnClass}`} ></div>
        </div>
    )
}
