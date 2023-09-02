import { React, useState } from 'react'
import DisplayCSS from '../css/displayCSS.css'


export default function Display() {
  const [PlayerCount, setPlayerCount] = useState(2);

  const [firstplayer, setfirstplayer] = useState("Player 1");
  const [secondplayer, setsecondplayer] = useState("Player 2");
  const [thirdplayer, setthirdplayer] = useState("Player 3");
  const [fourthplayer, setfourthplayer] = useState("Player 4");


  const handlePlayerCountChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPlayerCount(newValue);
    
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





  return (
    <div className='display' style={DisplayCSS}>

      <div className='display-container'>
        <h1 id='heading'>LUDO Players</h1>
        <div id='noOfPlayers'>
          <span id='selectPlayerText'>Select no of players:</span>
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
              <span>Blue</span>
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
              <span>Blue</span>

              <p onInput={handlePlayerNameChange} data-playerno='4' id='fourthPlayer' className='playerNameText'>{fourthplayer}:</p>
              <span className='editText' data-playerno='4' onClick={enablePlayerNameChange} >edit name</span>
              <p>Yellow</p>
            </>
          }

        </div>

      </div>


    </div >
  )
}
