import React from 'react'
import PathwayCSS from '../css/pathway.css'


export default function pathway(props) {
  var stops = props.stops
  var hstops = props.highlighted

  var layout=props.layout

  var divClass="pathwayVertical";
  if(layout==="horizontal")
    divClass="pathwayHorizontal"

  return (
    <div className={divClass} style={PathwayCSS} >
      {
        stops.map((row) => (
          <>
            {
              row.map(function (item) {
                var isHighlighted = hstops.includes(item)
                var classes = isHighlighted ? `pathway-cell ${props.stopcolor}` : "pathway-cell"
                return (
                  // <div className={classes}>{item}</div>
                  <div className={classes}></div>
                )
              })
            }
          </>
        ))

      }
    </div>
  )
}
