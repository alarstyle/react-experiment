import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import App1 from 'app1'
import App2 from './App2'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Core Home</Link></li>
              <li><Link to="/app1">App 1</Link></li>
              <li><Link to="/app2">App 2</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/app1">
              <App1 basename={"/app1"}/>
            </Route>
            <Route path="/app2">
              <App2 basename={"/app2"}/>
            </Route>
            <Route path="/">
              <div>Core home</div>
            </Route>
          </Switch>
        </Router>


      </header>
    </div>
  );
}

export default App;
