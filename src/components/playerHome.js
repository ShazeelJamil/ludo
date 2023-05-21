import React from 'react'

export default function playerHome(props) {
  var hoemStyle=
  {
    backgroundColor: props.bgColor,
    color:props.color,
    borderRadius:"5px"
  }

  return (
    <div style={hoemStyle} >
      
      {props.pawn}
      
    </div>
  )
}
