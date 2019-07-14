import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from "./Components/MainComponent";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
