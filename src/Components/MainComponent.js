import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Containers/Home/HomeComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import FourOhFour from "../Containers/FourOhFour/404";

const Main = () => {
  const HomePage = () => (
    <div>
      <Home/>
    </div>
  );

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route component={FourOhFour} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default Main;
