import React, { useState } from 'react';
import { gsap } from 'gsap';
import pawnCSS from "../css/playerHomeCss.css";

export default function PlayerHome(props) {
  var homeStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: "5px",
  };


  const [positions, setPositions] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  const playAnimation = (index) => {
    console.log("Animation");
    const targetPawn = document.getElementsByClassName("pawn")[index];
    const prevX = positions[index].x;
    const prevY = positions[index].y;
    const newX = prevX + 100;
    const newY = prevY + 100;
    gsap.fromTo(
      targetPawn,
      { x: prevX, y: prevY },
      {
        x: newX,
        y: newY,
        duration: 1,
      }
    );
    const updatedPositions = [...positions];
    updatedPositions[index] = { x: newX, y: newY };
    setPositions(updatedPositions);
  };

  return (
    <div style={homeStyle}>
      <div className="pawnDiv" style={pawnCSS} >
        {props.pawnArray.map((pawnArray, index) => (
          <div key={index} className="pawn" onClick={() => playAnimation(index)}>
            {props.pawnArray[index]}
          </div>
        ))}
      </div>
    </div>


    // <div className='playerHome' style={homeStyle} >
    //   <div className="pawnDiv" style={pawnCSS} >
    //     <div key={0} onClick={() => playAnimation(0)}> {props.pawn}</div>
    //     <div key={1} onClick={() => playAnimation(1)}> {props.pawn}</div>
    //     <div key={2} onClick={() => playAnimation(2)}> {props.pawn}</div>
    //     <div key={3} onClick={() => playAnimation(3)}> {props.pawn}</div>
    //   </div>
    // </div>


  )
}
