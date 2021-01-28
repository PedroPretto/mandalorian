import React from 'react'
import logo from '../../assets/mando.png'

const Banner: React.FC = () => {
    return(
        <div className='banner'>
            <img src={logo} alt="mandalorian"/>
        </div>
    )
}

export default Banner