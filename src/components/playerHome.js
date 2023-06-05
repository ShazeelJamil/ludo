import React from 'react';
// eslint-disable-next-line
import { gsap } from 'gsap';
import pawnCSS from "../css/playerHomeCss.css";
import chroma from 'chroma-js';

export default function PlayerHome(props) {
  var homeStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: "5px",
  };


  const playAnimation = (event, index) => {

    var targetPawn = event.target;

    var computedStyle = window.getComputedStyle(targetPawn);

    var colorValue = computedStyle.backgroundColor;
    var colorName = chroma(colorValue).name();

    var targetDivId = "68";

    if (colorName === '#ec0303') { targetDivId = "14" }
    else if (colorName === 'green') { targetDivId = "32" }
    else if (colorName === 'blue') { targetDivId = "50" }

    var targetDiv = document.getElementById(targetDivId);

    targetDiv.classList.add("gradient-effect")

    targetPawn.classList.add("multipleDisplay")

    console.log(colorName);
    if (targetDiv.hasChildNodes()) {

      var lastChild = targetDiv.lastElementChild;

      var lastChildLeft = lastChild.style.left || '0';
      var lastChildLeftValue = parseInt(lastChildLeft);

      var prev_z_index = lastChild.zIndex;
      var newLeftOffset = lastChildLeftValue + 7;

      targetPawn.style.left = newLeftOffset + 'px';
      targetPawn.zIndex = prev_z_index - 1;
    }
    else {
      targetPawn.zIndex = -1;
      targetPawn.style.left = '5px';
    }

    targetDiv.appendChild(targetPawn);

    setTimeout(() => {
      targetDiv.classList.remove('gradient-effect');
    }, 1000);

  };


  return (
    <div style={homeStyle}>
      <div className="pawnDiv" style={pawnCSS} >
        {props.pawnArray.map((elem, index) => (
          <div key={props.bgColor + index} onClick={(e) => playAnimation(e, index)}>
            {props.pawn}
          </div>
        ))}
      </div>
    </div>

  )
}
