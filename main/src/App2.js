import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log('App1 render');
  console.log(props.basename);
  return (
    <div className="App">
      App2
      <img src={logo} className="App-logo" alt=""/>
      <Router basename={props.basename}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home of App2</Link>
            </li>
            <li>
              <Link to="/page1">Page 1 of App2</Link>
            </li>
            <li>
              <Link to="/page2">Page 2 of App2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/page1">
            <div>Page 1 content of App2</div>
          </Route>
          <Route path="/page2">
            <div>Page 2 content of App2</div>
          </Route>
          <Route path="/" exact>
            <div>Home content of App2</div>
          </Route>
          <Route >
            <div>404 content of App2</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

App.propTypes = {
  basename: PropTypes.string
};

App.propTypes = {
  basename: null
};

export default App;
