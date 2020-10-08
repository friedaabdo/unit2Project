import React, {useState} from 'react'
import Card from './Card'
import './User.css'

const User = (props) => {



    return(
       

        <div className='hand'>
            <Card image={props.image}/>
        </div>
        
   
    )

}
export default User