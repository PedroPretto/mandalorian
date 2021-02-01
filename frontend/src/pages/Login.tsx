import React from 'react'
import Banner from '../components/Banner'
import Wrapper from '../components/Wrapper'
import LoginContainer from '../components/LoginContainer'

function Login() {

  return (
      <Wrapper 
      banner={<Banner/>}
      loginContainer={<LoginContainer/>}
      />
  )
}

export default Login;
