import React from 'react'
import './Buttons.css'

const Buttons = (props) => {
   
    return(
        <div className='buttonContainer'>
        <button className='deal' onClick={() => {props.handleDeal()}}>Deal</button>
        <button className='hit' onClick={() => {props.handleHit()}}>Hit</button>
        <button className='stand' onClick={() => {props.handleStand()}}>Stand</button>
        </div>
    )
}

export default Buttons

