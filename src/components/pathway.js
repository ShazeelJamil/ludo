import React from 'react'
import PathwayCSS from '../css/pathway.css'


export default function pathway(props) {
  var stops = props.stops
  var hstops = props.highlighted

  var layout = props.layout
  var divClass = "pathwayVertical";
  if (layout === "horizontal")
    divClass = "pathwayHorizontal";

  return (
    <div className={divClass} style={PathwayCSS}  >
      {
        stops.map((row, rowIndex) => (
          <>
            {
              row.map(function (item, colIndex) {
                var isHighlighted = hstops.includes(item)
                var defaultClass = `pathway-cell ${props.color + rowIndex + colIndex}`
                var classes = isHighlighted ? `${defaultClass} ${props.stopcolor}` : defaultClass
                return (
                  <div key={`${props.color + rowIndex + colIndex}`} id={item} className={classes}></div>
                )
              })
            }
          </>
        ))

      }
    </div>
  )
}
