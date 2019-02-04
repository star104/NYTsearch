import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactDOM from 'react-dom';

import Home from './pages/Home/Home';
import Saved from './pages/Saved/Saved';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotrom from './components/Jumbotrom/Jumbotrom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello world</h1>
        <Router>
          <div>
            <Navbar/>
            <Jumbotrom/>
            
               <Route exact path="/" component={Home} />
               <Route exact path="/Saved" component={Saved} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
