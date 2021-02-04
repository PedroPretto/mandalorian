import React from 'react'
import Banner from '../components/LoginComponents/Banner'
import Wrapper from '../components/LoginComponents/Wrapper'
import LoginContainer from '../components/LoginComponents/LoginContainer'

function Login() {
  return (
      <Wrapper 
      banner={<Banner/>}
      loginContainer={<LoginContainer/>}
      />
  )
}

export default Login;
