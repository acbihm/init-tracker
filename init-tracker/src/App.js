import React from 'react';
import logo from './logo.svg';
import './App.css';
// import HeaderText from "./components/HeaderText";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div className="App">
      <Wrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <HeaderText /> */}
        </header>
      </Wrapper>
    </div>
  );
}

export default App;
