import React from 'react'
import Card from './Card'

const Dealer = (props) => {
// console.log('props', props)


  
    return(
        <div className='hand'>
             <Card image={props.image}/>
        </div>

    )
}

export default Dealer