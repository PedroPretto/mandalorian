import React from 'react'
import Routes from './routes'
import {Provider} from 'react-redux'
import store from './store'
function App() {

  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}

export default App;
