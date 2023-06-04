import React, { useState } from 'react';
import { gsap } from 'gsap';
import pawnCSS from "../css/playerHomeCss.css";

export default function PlayerHome(props) {
  var homeStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: "5px",
  };


  // const [positions, setPositions] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  const playAnimation = (event, index, targetDivId) => {

    var targetPawn = event.target;
    console.log("Target: " + targetDivId);
    var targetDiv = document.getElementById(targetDivId);

    targetPawn.classList.add("multipleDisplay")
    if (targetDiv.hasChildNodes()) {

      var lastChild = targetDiv.lastElementChild;


      const parentWidth = parentDiv.offsetWidth;
      const childWidth = childDiv.offsetWidth;

      const leftOffset = (parentWidth - childWidth) / 2;
      childDiv.style.left = leftOffset + 'px';








      var prev_z_index = lastChild.zIndex;
      var left = lastChild.style.left;

      console.log("last_left: " + lastChild.style.left)
      console.log("last_zIndex: " + targetDiv.lastElementChild.zIndex)

      targetPawn.zIndex = prev_z_index - 1;
      targetPawn.style.left = left + 5;

      console.log("new_zIndex: " + targetPawn.zIndex)
      console.log("new_left: " + targetPawn.style.left)


    }
    else {

      targetPawn.zIndex = 1;
    }

    targetDiv.appendChild(targetPawn);








    // const targetDiv = document.getElementById(targetDivId); // Assuming each div has an ID with the format "div-{index}"

    // const rect = targetDiv.getBoundingClientRect();

    // const prevX = positions[index].x;
    // const prevY = positions[index].y;
    // console.log("prev positions", prevX, prevY);


    // // const newX = rect.left + (rect.width / 2) - (rect.x / 2);
    // // const newY = rect.top + (rect.height / 2) - (rect.y / 2);

    // const newX = rect.left;
    // const newY = rect.top;

    // console.log("new positions", newX, newY);

    // gsap.fromTo(
    //   targetPawn,
    //   { x: prevX, y: prevY },
    //   {
    //     x: newX,
    //     y: newY,
    //     duration: 1,
    //   }
    // );
    // const updatedPositions = [...positions];
    // updatedPositions[index] = { x: newX, y: newY };
    // setPositions(updatedPositions);
  };

  return (
    <div style={homeStyle}>
      <div className="pawnDiv" style={pawnCSS} >
        {props.pawnArray.map((elem, index) => (
          <div key={props.bgColor + index} onClick={(e) => playAnimation(e, index, "red01")}>
            {props.pawn}
          </div>
        ))}
      </div>
    </div>

  )
}
