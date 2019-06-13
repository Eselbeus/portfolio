import React from 'react';
import medium from "./images/mediumlogo.png"
import github from "./images/githublogo.png"
import linkedin from "./images/linkedinlogo.png"
import twitter from "./images/twitterlogo.png"
import sitepic from "./images/sitepic.jpeg"
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/sketch'

import './App.css';

class App extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="frontpage">
        <span>
          <div>
            <ul>
              <li>Ruby</li>
              <li>Rails</li>
              <li>SQLite3</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <img className="sitepic" src={sitepic} />
          <div>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>p5.js</li>
              <li>CSS3</li>
              <li>HTML5</li>
            </ul>
          </div>
        </span>
      </div>
    );
  }
}

export default App;
