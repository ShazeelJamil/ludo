import React from 'react'
import homeCSS from '../css/homeCSS.css'
import pawnCSS from '../css/pawnCSS.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function Home() {

  
  const passedList = useSelector((state) => state.ludo.recentlyPassed);


  return (
    <div className='home' id='home' style={homeCSS}>
      {
        passedList.map((elem, index) => {
          return (<div key={index} id={elem['id']} className={elem['className']} style={pawnCSS} ></div>)
        })
      }
      

    </div>
  )
}
