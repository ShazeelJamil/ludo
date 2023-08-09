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

    var inc = 3;

    var targetDivId;
    if (targetPawn.parentElement.className === "pawnHomeDiv") {
      targetDivId = "68"; //yellow
      if (colorName === '#ec0303') { targetDivId = "14" } //red
      else if (colorName === 'green') { targetDivId = "32" }
      else if (colorName === 'blue') { targetDivId = "50" }
    }
    else {

      






      targetDivId = parseInt(targetPawn.parentElement.id)
      targetDivId = (targetDivId + inc) % 72
      targetDivId = targetDivId === 0 ? 1 : targetDivId
      targetDivId = targetDivId.toString()
    }

    if (targetPawn.parentElement.id === targetDivId) return; // source and dstination are same

    var targetDiv = document.getElementById(targetDivId);

    targetDiv.classList.add("gradient-effect")
    targetPawn.classList.add("multipleDisplay")









    if (targetDiv.hasChildNodes()) {

      var lastChild = targetDiv.lastElementChild;

      var lastChildLeft = lastChild.style.left || '0';
      var lastChildLeftValue = parseInt(lastChildLeft);

      var prev_z_index = lastChild.zIndex;
      var newLeftOffset = lastChildLeftValue + 15;

      targetPawn.style.left = newLeftOffset + 'px';
      targetPawn.zIndex = prev_z_index - 1;

      var countOfPawns = targetDiv.childElementCount;

      var isAtStop = (props.unkillables).some(row => row.includes(parseInt(targetDiv.id))); //to check if the openents pawn is at unkillable stop

      if (!isAtStop && countOfPawns < 2 && lastChild.className !== targetPawn.className) { // to kill another pawn 

        var homeDivClass = lastChild.classList[1]
        if (homeDivClass === 'pawnred') { homeDivClass = "red" }
        else if (homeDivClass === 'pawngreen') { homeDivClass = "green" }
        else if (homeDivClass === 'pawnblue') { homeDivClass = "blue" }
        else if (homeDivClass === 'pawnyellow') { homeDivClass = "yellow" }

        // console.log("homeDivClass - ", homeDivClass)
        var homeDiv = document.getElementById(homeDivClass)
        // homeDiv.style.border="1px solid black"
        homeDiv.appendChild(lastChild)
      }

    }
    else { //to stack one pawn over another pawn
      targetPawn.zIndex = -1;
      targetPawn.style.left = '5px';
    }

    targetDiv.appendChild(targetPawn);
    setTimeout(() => {
      targetDiv.classList.remove('gradient-effect');
    }, 1000);

  };


  return (
    <div id="playerHome" style={homeStyle}>
      <div className={`pawnDiv ${props.bgColor}`} id={props.bgColor} style={pawnCSS} >
        {props.pawnArray.map((elem, index) => (
          <div key={props.bgColor + index} className='singlePawn' onClick={(e) => playAnimation(e, index)}>
            {props.pawn}
          </div>
        ))}
      </div>
    </div>

  )
}
