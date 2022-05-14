import React from 'react'

export const DisplayArea = (props) => {


  return (
    <div className="DisplayArea">
        <textarea readOnly value={props.memo}></textarea>
    </div>
  )
}
