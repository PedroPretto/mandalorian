import React from 'react'
import logo from '../../../assets/mando.png'
import api from '../../../adapters'
import {loginAction} from '../../../store/login'
import {useDispatch, useSelector} from 'react-redux'

interface login{
    user: string,
    password: string
}

interface loginResponse{
    id: string
}

const Login: React.FC = () => {

    const user = {
        user: 'janice',
        password: 'kkkkkkkk'
    }

    const id = useSelector(state => state)
    const dispatcher = useDispatch()

    const handleLogin = (login: login) =>{
        const {user, password} = login
        try{
            api.post<loginResponse>('/login', {user,password}).then(res =>{
                console.log(res)
                dispatcher(loginAction(res.data.id[0]))
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className='loginContent'>

            <img src={logo} alt=""/>

            <div className="form">
                <div className="inputs">
                    <input required name="user" type="text" className="logininput"/>
                    <label>Username</label>
                </div>

                <div className="inputs">
                    <input required name="password" type="password" />
                    <label>Password</label>
                </div>

                {console.log(id)}
                
                <div className="buttons">
                    <button onClick={() => handleLogin(user)} className="login-btn">Login</button>
                    <h1><span>or</span></h1>
                    <button className="register-btn">Register</button>
                </div>
                
            </div>
        </div>
    )
}

export default Login