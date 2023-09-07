import React from 'react';
import pawnCSS from '../css/pawnCSS.css'
import pawnDivCSS from "../css/playerHomeCss.css";
import chroma from 'chroma-js';
import { useDispatch } from 'react-redux'
// eslint-disable-next-line
import { begin, kill } from '../provider/Slices/LudoAction';
import { useSelector } from 'react-redux/es/hooks/useSelector';


export default function PlayerHome(props) {
  var pawnClass;
  if (props.pawncolor === 'green') pawnClass = "pawngreen"
  else if (props.pawncolor === 'blue') pawnClass = "pawnblue"
  else if (props.pawncolor === 'yellow') pawnClass = "pawnyellow"
  else pawnClass = "pawnred"

  var homeStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: "5px",
  };

  function isInHome(id) {
    return (((id >= 8 && id <= 12) || (id >= 26 && id <= 30) || (id >= 44 && id <= 48) || (id >= 62 && id <= 66)) ? true : false);
  }

  const dispatch = useDispatch()
  const score = useSelector((state) => state.ludo.score)

  // const pawnState = useSelector((state) => state.ludo.states)

  function enableOnTheWay(player, pawnindex) {
    const action = {
      player: player,
      index: pawnindex,
    }
    dispatch(begin(action));
  }
  function enableKill(player, pawnindex) {
    const action = {
      player: player,
      index: pawnindex,
    }
    dispatch(kill(action));
  }
  function isAtCriticalPoint(id) {
    return (id === 7 || id === 25 || id === 43 || id === 61)
  }





  const playAnimation = (event, index) => {

    var targetPawn = event.target
    var computedStyle = window.getComputedStyle(targetPawn);

    var colorValue = computedStyle.backgroundColor;
    var colorName = chroma(colorValue).name();

    if (colorName === '#ec0303') { colorName = "red"; }
    else if (colorName === '#e0f613') { colorName = "yellow"; }

    var inc = score;

    const targetPawnIndex = targetPawn.classList[2];
    var currentDivId, targetDivId;
    if (targetPawn.parentElement.className.includes("pawnHomeDiv") && score === 6) {
      targetDivId = "32"; //green
      if (colorName === 'red') { targetDivId = "14" }
      else if (colorName === 'yellow') { targetDivId = "68" }
      else if (colorName === 'blue') { targetDivId = "50" }


      enableOnTheWay(colorName, targetPawnIndex)
    }
    else {

      currentDivId = parseInt(targetPawn.parentElement.id)
      targetDivId = (currentDivId + inc) % 72

      var tarDiv = document.getElementById(targetDivId);

      if (isInHome(targetDivId) && !tarDiv.classList[1].includes(colorName)) { // check if it about to be in home and to check if the right pawns enters the home
        targetDivId += 5;
      }
      if (score === 6 && isAtCriticalPoint(currentDivId) && !tarDiv.classList[1].includes(colorName)) { // to make the movement of pawns in case if 6 score
        targetDivId += 5;
      }
      targetDivId = targetDivId === 0 ? 72 : targetDivId
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
      var newLeftOffset = lastChildLeftValue + 10;

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
        homeDiv.classList.add("pawnHomeDiv");

        // homeDiv.style.border = "1px solid black"
        homeDiv.appendChild(lastChild)
        enableKill(homeDivClass, targetPawnIndex)
      }

    }
    else { //to stack one pawn over another pawn
      targetPawn.zIndex = -1;
      targetPawn.style.left = '5px';
    }

    targetDiv.appendChild(targetPawn);
    setTimeout(() => { targetDiv.classList.remove('gradient-effect'); }, 1000);

  };


  return (
    <div id="playerHome" style={homeStyle}>
      <div className={`pawnDiv ${props.bgColor}`} id={props.bgColor} style={pawnDivCSS} >
        {props.pawnArray.map((elem, index) => (
          <div key={props.bgColor + index} className='singlePawn pawnHomeDiv' onClick={(e) => playAnimation(e, index)} style={pawnCSS}>
            <div className={`pawn pawn${props.bgColor} ${pawnClass} ${index}`} id={props.bgColor+index} ></div>
          </div>
        ))}
      </div>
    </div>

  )
}
