import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import * as serviceWorker from './serviceWorker';
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/sketch'


ReactDOM.render(
  <Router className="background">
    <P5Wrapper sketch={sketch} className="canvas"></P5Wrapper>
    <Header />
    <Nav />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/" component={App} />
    <Footer className='footer'/>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
