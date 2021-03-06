import React , { useState, useCallback } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';

export default function Routes(){
     
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return(
        <Switch>
          <Route path="/home" exact component={Home} /> 
          <Route path="/login" exact component={Login} /> 
          <Route exact path="/" render={() => (
            isLoggedIn ? (
              <Redirect to="/home"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
        </Switch>
    )
}