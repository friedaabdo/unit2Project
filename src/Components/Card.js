import React from 'react'
import './Card.css'

const Card = (props) => {
    // console.log('card props', props.value)

    

    return(
        <div className='cardImg'>
          <img src={props.image} alt={props.code}/>  
        </div>
        
    )
}

export default Card