import React from 'react'
import {Link} from 'react-router-dom'
import './BJLP.css'
// import {Route,Switch} from 'react-router-dom'




const LandingPage = () => {
    return(
        <div className='landing'>
            <h1>Let's Play BlackJack!</h1>
            <Link to='/game'><button>Play!</button></Link>
            <Link to='/rules'><button>Rules</button></Link>

         

        </div>
    )
}

export default LandingPage