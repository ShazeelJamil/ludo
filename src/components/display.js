import { React, useState } from 'react'
import DisplayCSS from '../css/displayCSS.css'
import one from '../imgs/1.jpg'
import two from '../imgs/2.jpg'
import three from '../imgs/3.jpg'
import four from '../imgs/4.jpg'
import five from '../imgs/5.jpg'
import six from '../imgs/6.jpg'
import rolling from '../imgs/dice.gif'
import { useDispatch } from 'react-redux'
import { setScore } from '../provider/Slices/LudoAction';


export default function Display() {
  const [PlayerCount, setPlayerCount] = useState(4);

  const [firstplayer, setfirstplayer] = useState("Player 1");
  const [secondplayer, setsecondplayer] = useState("Player 2");
  const [thirdplayer, setthirdplayer] = useState("Player 3");
  const [fourthplayer, setfourthplayer] = useState("Player 4");

  const dispatch = useDispatch()


  const handlePlayerCountChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPlayerCount(newValue);

    var greenDiv, yellowDiv;
    if (PlayerCount === 4) {
      greenDiv = document.getElementById("green");
      greenDiv.style.opacity = "30%"
      greenDiv.style.pointerEvents = "none";

      yellowDiv = document.getElementById("yellow");
      yellowDiv.style.opacity = "30%"
      yellowDiv.style.pointerEvents = "none";
    }
    else {
      greenDiv = document.getElementById("green");
      greenDiv.style.opacity = "100%"
      greenDiv.style.pointerEvents = "auto";

      yellowDiv = document.getElementById("yellow");
      yellowDiv.style.opacity = "100%"
      yellowDiv.style.pointerEvents = "auto";

    }
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

  const handlePlayerNameChange  = (event) => {

    const clickedElement = event.target;
    const player_id = clickedElement.getAttribute("data-playerno");
    var newValue = clickedElement.textContent;

    if (newValue.trim().length === 0) newValue = "Unknown";

    if (player_id === '1') setfirstplayer(newValue);
    else if (player_id === '2') setsecondplayer(newValue)
    else if (player_id === '3') setthirdplayer(newValue);
    else setfourthplayer(newValue);
  };

  const handleDiceClick = async (event) => {

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
    else image.src = six

    const action ={
      score:randomNumber
    }
    dispatch(setScore(action))
  }


  return (
    <div className='display' style={DisplayCSS}>

      <div className='display-container'>
        <h1 id='heading'>LUDO Players</h1>
        <div id='noOfPlayers'>
          <span id='selectPlayerText'>Select no of players: </span>
          <select id="textboxes" onChange={handlePlayerCountChange} >
            <option value="2" >2</option>
            <option value="4" >4</option>
          </select>
          {/* <button type="button" id='' className="btn btn-primary"  >Apply {PlayerCount} Players Game</button> */}
        </div>


        <div id='activePlayers'>
          {PlayerCount === 2 ?
            <>
              <p onInput={handlePlayerNameChange} data-playerno='1' id='firstPlayer' className='playerNameText' >{firstplayer}:</p>
              <span className='editText' data-playerno='1' onClick={enablePlayerNameChange} >edit name</span>
              <p>Red</p>

              <p onInput={handlePlayerNameChange} data-playerno='2' id='secondPlayer' className='playerNameText'>{thirdplayer}:</p>
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
          <h6> Player's Turn </h6>
          <img src={rolling} id='dice' alt='dice' height='80px' width='80px' onClick={handleDiceClick} />
        </div>






      </div>


    </div >
  )
}
