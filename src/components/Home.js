import React from 'react'
import homeCSS from '../css/homeCSS.css'
import pawnCSS from '../css/pawnCSS.css'
import passedPawnCSS from '../css/passedPawn.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function Home() {

  const passedListRed = useSelector((state) => state.ludo.recentlyPassedRed);
  const passedListYellow = useSelector((state) => state.ludo.recentlyPassedYellow);
  const passedListGreen = useSelector((state) => state.ludo.recentlyPassedGreen);
  const passedListBlue = useSelector((state) => state.ludo.recentlyPassedBlue);


  return (
    <div className='home' id='home' style={homeCSS}>

      {
        <div id='greenPassed' style={passedPawnCSS}>
          {passedListGreen.map((elem, index) => {
            return <div key={index} id={elem['id']} className={elem['className']} style={pawnCSS} ></div>
          })}
        </div>
      }
      {
        <div id='redPassed' style={passedPawnCSS}>
          {passedListRed.map((elem, index) => {
            return <div key={index} id={elem['id']} className={elem['className']} style={pawnCSS} ></div>
          })}
        </div>
      }
      {
        <div id='bluePassed' style={passedPawnCSS}>
          {passedListBlue.map((elem, index) => {
            return <div key={index} id={elem['id']} className={elem['className']} style={pawnCSS} ></div>
          })}
        </div>
      }
      {
        <div id='yellowPassed' style={passedPawnCSS}>
          {passedListYellow.map((elem, index) => {
            return <div key={index} id={elem['id']} className={elem['className']} style={pawnCSS} ></div>
          })}
        </div>
      }


    </div>
  )
}
