import React from 'react';
import medium from "./images/mediumlogo.png"
import github from "./images/githublogo.png"
import linkedin from "./images/linkedinlogo.png"
import twitter from "./images/twitterlogo.png"
import sitepic from "./images/sitepicnew.jpg"
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
        <span className="pic-container">
          <img className="sitepic" src={sitepic} />
        </span>
        <span className="skills">
          <div className="backend-skills all-skills">
            <h3>Back-end Skills</h3>
            <ul>
              <li>Ruby</li>
              <li>Rails</li>
              <li>SQLite3</li>
              <li>PostgreSQL</li>
              <li>Python</li>
              <li>Flask</li>
              <li>Numpy/Pandas</li>
            </ul>
          </div>
          <div className="frontend-skills all-skills">
            <h3>Front-end Skills</h3>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>p5.js</li>
              <li>ERB/Haml</li>
              <li>CSS/SCSS</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="other-skills all-skills">
          <h3>Other Skills</h3>
          <ul>
            <li>Git</li>
            <li>Bash/Zsh</li>
            <li>Jira/Bitbucket</li>
            <li>Java/Swing</li>
            <li>CI/CD</li>
            <li>Github</li>
            <li>Shopify</li>
            <li>Jupyter Notebook</li>
          </ul>
          </div>
        </span>
      </div>
    );
  }
}

export default App;
