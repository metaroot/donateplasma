import React, {Component, useState, useEffect} from 'react'
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import logo from '../logo.svg';
import '../styles/App.css';
import PatientHome from './PatientHome'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import createHistory from 'history/createBrowserHistory';
import routes from './routes';
import firebase, { auth, provider, firebaseConfig } from '../firebase.js';


export const AuthContext = React.createContext(null);

function App() {
  
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <ThemeProvider>
      <CSSReset />
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Switch>
      </Router>  
    </ThemeProvider>
  );
}

export default App;
