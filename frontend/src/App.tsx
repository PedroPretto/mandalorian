import React from 'react';
import Banner from './components/Banner'
import Wrapper from './components/Wrapper'
import LoginContainer from './components/LoginContainer'
function App() {
  return (
    <div className="App">
      <Wrapper 
      banner={<Banner/>}
      loginContainer={<LoginContainer/>}
      />
    </div>
  );
}

export default App;
