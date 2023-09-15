import { React, useState } from 'react'
import DisplayCSS from '../css/displayCSS.css'
import one from '../imgs/1.jpg'
import two from '../imgs/2.jpg'
import three from '../imgs/3.jpg'
import four from '../imgs/4.jpg'
import five from '../imgs/5.jpg'
import six from '../imgs/6.jpg'
import rolling from '../imgs/dice.gif'
import { useDispatch, useSelector } from 'react-redux'
import { setScore, setCurrentPlayerCount } from '../provider/Slices/LudoAction';


export default function Display() {

  // document.addEventListener("DOMContentLoaded", function () {
  //   disableAll();
  //   console.log("DOM is ready.");
  // });


  const [PlayerCount, setPlayerCount] = useState(4);
  const [counter, setCounter] = useState(0)

  const [firstplayer, setfirstplayer] = useState("Player 1");
  const [secondplayer, setsecondplayer] = useState("Player 2");
  const [thirdplayer, setthirdplayer] = useState("Player 3");
  const [fourthplayer, setfourthplayer] = useState("Player 4");

  const [CurrentPlayer, setCurrentPlayer] = useState("")

  const dispatch = useDispatch()
  const states = useSelector((state) => state.ludo.states)

  var player = ['red', 'green', 'blue', 'yellow'];
  if (PlayerCount === 2) player = ['red', 'blue', 'red', 'blue']

  // window.onload = function () {
  //   console.log("DOM is ready.")
  //   for (let i = 0; i < 4; i++) {
  //     var elem = player[i];
  //     for (let j = 0; j < 4; j++) {
  //       var el = states[elem][j]
  //       if (el !== "O") {
  //         const div = document.getElementById(elem + j);
  //         div.style.opacity = "50%"
  //         div.style.pointerEvents = "none";
  //       }
  //     }
  //   }
  // }

  const disableAll = () => {
    var playerTemp = ['red', 'green', 'blue', 'yellow']; // this is to disable all the pawn even of  PlayerCount is 2
    for (let i = 0; i < 4; i++) {
      var elem = playerTemp[i];
      for (let j = 0; j < 4; j++) {
        const div = document.getElementById(elem + j);
        div.style.opacity = "50%"
        div.style.pointerEvents = "none";
      }
      document.getElementById(elem).style.pointerEvents = "none";
    }

  }

  const handlePlayerCountChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPlayerCount(newValue);

    const action = {
      playerCount: PlayerCount
    }
    dispatch(setCurrentPlayerCount(action))
  };

  const enablePlayerNameChange = (event) => {

    const clickedElement = event.target;
    const player_id = clickedElement.getAttribute("data-playerno");
    var player;
    if (player_id === '1') player = document.getElementById("firstPlayer");
    else if (player_id === '2') player = document.getElementById("secondPlayer");
    else if (player_id === '3') player = document.getElementById("thirdPlayer");
    else player = document.getElementById("fourthPlayer");

    player.setAttribute("contenteditable", "true");
    player.focus();
  }

  const handlePlayerNameChange = (event) => {

    const clickedElement = event.target;
    const player_id = clickedElement.getAttribute("data-playerno");
    var newValue = clickedElement.textContent;

    if (newValue.trim().length === 0) newValue = "Unknown";

    if (player_id === '1') setfirstplayer(newValue);
    else if (player_id === '2') setsecondplayer(newValue)
    else if (player_id === '3') setthirdplayer(newValue);
    else setfourthplayer(newValue);
  };

  const enableClickOf = (playerColor, onlyActives = false) => {

    if (onlyActives) {
      for (var i = 0; i < 4; i++) {
        if (states[playerColor][i] === "O") {
          var onlyActiveDiv = document.getElementById(playerColor + i);
          onlyActiveDiv.style.opacity = "100%"
          onlyActiveDiv.style.pointerEvents = "auto";
        }
      }
    }
    else {
      for (var j = 0; j < 4; j++) {
        var div = document.getElementById(playerColor + j);
        div.style.opacity = "100%"
        div.style.pointerEvents = "auto";
      }
    }
  }

  const handleDiceClick = async (event) => {

    disableAll();
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    var image = event.target
    image.src = rolling

    const shortDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    await shortDelay(500);

    if (randomNumber === 1) image.src = one
    else if (randomNumber === 2) image.src = two
    else if (randomNumber === 3) image.src = three
    else if (randomNumber === 4) image.src = four
    else if (randomNumber === 5) image.src = five
    else image.src = six;

    const action = {
      score: randomNumber
    }
    dispatch(setScore(action))

    setCurrentPlayer(player[counter])
    setCounter((counter + 1) % 4)

    if (randomNumber === 6) { enableClickOf(CurrentPlayer) }
    else { enableClickOf(CurrentPlayer, true) }

  }


  return (
    <div className='display' style={DisplayCSS}>

      <div className='display-container'>
        <h1 id='heading'>LUDO Players</h1>
        <div id='noOfPlayers'>
          <span id='selectPlayerText'>Select no of players: </span>
          <select id="textboxes" onChange={handlePlayerCountChange} >
            <option value="4" >4</option>
            <option value="2" >2</option>
          </select>
          {/* <button type="button" id='' className="btn btn-primary"  >Apply {PlayerCount} Players Game</button> */}
        </div>

        <div id='activePlayers'>
          {PlayerCount === 2 ?
            <>
              <p onInput={handlePlayerNameChange} data-playerno='1' id='firstPlayer' className='playerNameText' >{firstplayer}:</p>
              <span className='editText' data-playerno='1' onClick={enablePlayerNameChange} >edit name</span>
              <p>Red</p>

              <p onInput={handlePlayerNameChange} data-playerno='2' id='secondPlayer' className='playerNameText'>{secondplayer}:</p>
              <span className='editText' data-playerno='2' onClick={enablePlayerNameChange} >edit name</span>
              <p>Blue</p>
            </> :
            <>
              <p onInput={handlePlayerNameChange} data-playerno='1' id='firstPlayer' className='playerNameText' >{firstplayer}:</p>
              <span className='editText' data-playerno='1' onClick={enablePlayerNameChange} >edit name</span>
              <p>Red</p>

              <p onInput={handlePlayerNameChange} data-playerno='2' id='secondPlayer' className='playerNameText'>{secondplayer}:</p>
              <span className='editText' data-playerno='2' onClick={enablePlayerNameChange} >edit name</span>
              <p>Green</p>

              <p onInput={handlePlayerNameChange} data-playerno='3' id='thirdPlayer' className='playerNameText'>{thirdplayer}:</p>
              <span className='editText' data-playerno='3' onClick={enablePlayerNameChange} >edit name</span>
              <p>Blue</p>

              <p onInput={handlePlayerNameChange} data-playerno='4' id='fourthPlayer' className='playerNameText'>{fourthplayer}:</p>
              <span className='editText' data-playerno='4' onClick={enablePlayerNameChange} >edit name</span>
              <p>Yellow</p>
            </>
          }

        </div>

        <div className="dicesContainer" >
          <h6>{CurrentPlayer.toUpperCase()} Player's Turn </h6>
          <img src={rolling} id='dice' alt='dice' height='80px' width='80px' onClick={handleDiceClick} />
        </div>

      </div>

      
    </div >
  )
}
