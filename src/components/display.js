import { React, useState } from 'react'
import DisplayCSS from '../css/displayCSS.css'


export default function Display() {
  const [PlayerCount, setPlayerCount] = useState(2);

  const [firstplayer, setfirstplayer] = useState("Player# 1");
  const [secondplayer, setsecondplayer] = useState("Player# 2");
  const [thirdplayer, setthirdplayer] = useState("Player# 3");
  const [fourthplayer, setfourthplayer] = useState("Player# 4");



  const handlePlayerCountChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPlayerCount(newValue);
  };

  const handleFirstPlayerChange = (event) => {
    const newValue = event.target.value;
    setfirstplayer(newValue);
  };

  const enablePlayerNameChange = (event) => {

    const clickedElement = event.target;
    const player_id = clickedElement.getAttribute("data-playerNo");
    var player;
    if (player_id === '1') player = document.getElementById("firstPlayer");
    else if (player_id === '2') player = document.getElementById("secondPlayer");
    else if (player_id === '3') player = document.getElementById("thirdPlayer");
    else player = document.getElementById("fourthPlayer");

    player.setAttribute("contenteditable", "true");
    player.focus();
  }

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
          <button type="button" className="btn btn-primary" >Apply {PlayerCount} Players Game</button>
        </div>


        <div id='activePlayers'>
          <span onChange={handleFirstPlayerChange} id='firstPlayer'className='playerNameText' >{firstplayer}:</span>
          <span className='editText' data-playerNo='1' onClick={enablePlayerNameChange} >edit name</span>
          <span>Red</span>

          <span id='secondPlayer' className='playerNameText'>{secondplayer}:</span>
          <span className='editText' data-playerNo='2'  onClick={enablePlayerNameChange} >edit name</span>
          <span>Green</span>

          
          <span id='thirdPlayer' className='playerNameText'>{thirdplayer}:</span>
          <span className='editText' data-playerNo='3'  onClick={enablePlayerNameChange} >edit name</span>
          <span>Blue</span>
          
          <span id='fourthPlayer' className='playerNameText'>{fourthplayer}:</span>
          <span className='editText' data-playerNo='4'  onClick={enablePlayerNameChange} >edit name</span>
          <span>Yellow</span>




        </div>

      </div>


    </div>
  )
}
