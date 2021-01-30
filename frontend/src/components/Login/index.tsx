import React from 'react'
import logo from '../../assets/mando.png'

const Login: React.FC = () => {
    return(
        <div className='loginContent'>

            <img src={logo} alt=""/>

            <div className="form">
                <div className="inputs">
                    <input required type="text" className="logininput"/>
                    <label>Username</label>
                </div>

                <div className="inputs">
                    <input required type="password" />
                    <label>Password</label>
                </div>


                
                <div className="buttons">
                    <button className="login-btn">Login</button>
                    <h1><span>or</span></h1>
                    <button className="register-btn">Register</button>
                </div>
                
            </div>
        </div>
    )
}

export default Login