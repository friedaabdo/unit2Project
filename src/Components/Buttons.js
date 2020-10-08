import React from 'react'

const Buttons = (props) => {
   
    return(
        <div>
        <button onClick={() => {props.handleDeal()}}>Deal</button>
        <button onClick={() => {props.handleHit()}}>Hit</button>
        <button onClick={() => {props.handleStand()}}>Stand</button>
        </div>
    )
}

export default Buttons

