import React from 'react'
import Routes from './routes'
function App() {

  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  return (
      <Routes/>
  )
}

export default App;
