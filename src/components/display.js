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
import first from '../imgs/winners/1st.png'
import second from '../imgs/winners/2nd.png'
import third from '../imgs/winners/3rd.png'
import fourth from '../imgs/winners/4th.png'




export default function Display() {

  // document.addEventListener("DOMContentLoaded", function () {
  //   disableAll();
  //   console.log("DOM is ready.");
  // });

  // const [winnerStyle, setWinnerStyle] = useState({
  //   position: 'absolute',
  //   top: '-10px',
  //   left: '25%',
  //   height: '50px',
  //   // display: 'none',
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
  const [firstClick, setFirstClick] = useState(true);

  var player = ['red', 'green', 'blue', 'yellow'];
  if (PlayerCount === 2) player = ['red', 'blue', 'red', 'blue']

  // eslint-disable-next-line
  const passedCount = useSelector((state) => state.ludo.passedCount)
  // eslint-disable-next-line
  const positions = useSelector((state) => state.ludo.positionHolder)
  
  const redPos = positions['red']
  // eslint-disable-next-line
  const greenPos = positions['green']
  // eslint-disable-next-line
  const bluePos = positions['blue']
  // eslint-disable-next-line
  const yellowPos = positions['yellow']

  if (redPos !== 0) {
    var d1 = document.getElementById('redWinImg')
    d1.style.display = 'block'
    d1.parentElement.style.opacity='50%';
    player = player.filter(item => item !== 'red');    
    if (redPos === 1) d1.src = first;
    else if (redPos === 2) d1.src = second
    else if (redPos === 3) d1.src = third
    else if (redPos === 4) d1.src = fourth
  }
  else if (greenPos !== 0) {
    var d2 = document.getElementById('greenWinImg')
    d2.style.display = 'block'
    d2.parentElement.style.opacity='50%';
    d2.style.opacity='100%'
    player = player.filter(item => item !== 'green');    
    if (greenPos === 1) d2.src = first;
    else if (greenPos === 2) d2.src = second
    else if (greenPos === 3) d2.src = third
    else if (greenPos === 4) d2.src = fourth
  }
  else if (bluePos !== 0) {
    var d3 = document.getElementById('blueWinImg')
    d3.style.display = 'block'
    d3.parentElement.style.opacity='50%';
    player = player.filter(item => item !== 'blue');    
    if (bluePos === 1) d3.src = first;
    else if (bluePos === 2) d3.src = second
    else if (bluePos === 3) d3.src = third
    else if (bluePos === 4) d3.src = fourth
  }
  // else if (yellowPos !== 0) {
  //   var d4 = document.getElementById('yellowWinImg')
  //   d4.style.display = 'block'
  //   if (yellowPos === 1) d4.src = first;
  //   else if (yellowPos === 2) d4.src = second
  //   else if (yellowPos === 3) d4.src = third
  //   else if (yellowPos === 4) d4.src = fourth
  // }


  // window.onload = function () {
  //   console.log("DOM is ready.")
  //   document.getElementsByClassName('positionHolder').style.display = 'none'
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

  const highlightPlayer = () => {
    var div;
    if (CurrentPlayer === 'red') {
      div = document.getElementById('RedTurnDiv')
      div.style.border = '1px solid white';
      div.style.borderRadius = '10px';
    }
    else if (CurrentPlayer === 'green') {
      div = document.getElementById('GreenTurnDiv')
      div.style.border = '1px solid white';
      div.style.borderRadius = '10px';
    }
    else if (CurrentPlayer === 'blue') {
      div = document.getElementById('BlueTurnDiv')
      div.style.border = '1px solid white';
      div.style.borderRadius = '10px';
    }
    else if (CurrentPlayer === 'yellow') {
      div = document.getElementById('YellowTurnDiv');
      div.style.border = '1px solid white';
      div.style.borderRadius = '10px';
    }
  }
  const unhighlightPlayer = () => {

    document.getElementById('RedTurnDiv').style.border = 'none';

    document.getElementById('GreenTurnDiv').style.border = 'none';

    document.getElementById('BlueTurnDiv').style.border = 'none';

    document.getElementById('YellowTurnDiv').style.border = 'none';
  }

  const handleDiceClick = async (event) => {

    if (firstClick === false) unhighlightPlayer()
    highlightPlayer();

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

    if (firstClick === false) {
      if (randomNumber === 6) { enableClickOf(CurrentPlayer) }
      else { enableClickOf(CurrentPlayer, true) }
    }
    setFirstClick(false)
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
        </div>

        <div id='activePlayers'>
          {PlayerCount === 2 ?
            <>
              <div id='RedTurnDiv' className='playerDescription'>
                <p onInput={handlePlayerNameChange} data-playerno='1' id='firstPlayer' className='playerNameText' >{firstplayer}:</p>
                <span className='editText' data-playerno='1' onClick={enablePlayerNameChange} >edit name</span>
                <p>Red</p>
                <img className='positionHolder' id='redWinImg' src='' alt='Winner' />
              </div>

              <div id='BlueTurnDiv' className='playerDescription'>
                <p onInput={handlePlayerNameChange} data-playerno='2' id='secondPlayer' className='playerNameText'>{secondplayer}:</p>
                <span className='editText' data-playerno='2' onClick={enablePlayerNameChange} >edit name</span>
                <p>Blue</p>
                <img className='positionHolder' id='blueWinImg' src='' alt='Winner' />
              </div>
            </> :
            <>
              <div id='RedTurnDiv' className='playerDescription' >
                <p onInput={handlePlayerNameChange} data-playerno='1' id='firstPlayer' className='playerNameText' >{firstplayer}:</p>
                <span className='editText' data-playerno='1' onClick={enablePlayerNameChange} >edit name</span>
                <p>Red</p>
                <img className='positionHolder' id='redWinImg' src='' alt='Winner' />
              </div>

              <div id='GreenTurnDiv' className='playerDescription'>
                <p onInput={handlePlayerNameChange} data-playerno='2' id='secondPlayer' className='playerNameText'>{secondplayer}:</p>
                <span className='editText' data-playerno='2' onClick={enablePlayerNameChange} >edit name</span>
                <p>Green</p>
                <img className='positionHolder' id='greenWinImg' src='' alt='Winner' />
              </div>

              <div id='BlueTurnDiv' className='playerDescription' >
                <p onInput={handlePlayerNameChange} data-playerno='3' id='thirdPlayer' className='playerNameText'>{thirdplayer}:</p>
                <span className='editText' data-playerno='3' onClick={enablePlayerNameChange} >edit name</span>
                <p>Blue</p>
                <img className='positionHolder' id='blueWinImg' src='' alt='Winner' />
              </div>

              <div id='YellowTurnDiv' className='playerDescription' >
                <p onInput={handlePlayerNameChange} data-playerno='4' id='fourthPlayer' className='playerNameText'>{fourthplayer}:</p>
                <span className='editText' data-playerno='4' onClick={enablePlayerNameChange} >edit name</span>
                <p>Yellow</p>
                <img className='positionHolder' id='yellowWinImg' src='' alt='Winner' />
              </div>

            </>
          }

        </div>

        <div className="dicesContainer" >
          <h6>{CurrentPlayer } Player's Turn </h6>
          <img src={rolling} id='dice' alt='dice' height='80px' width='80px' onClick={handleDiceClick} />
        </div>


      </div>


    </div >
  )
}
