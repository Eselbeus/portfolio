import React from 'react'
import rockmuser from '../images/LRM_Zd.gif'
import eike from '../images/eike.gif'
import musi from '../images/musiscreenshot.png'
import booktrade from '../images/booktrade.png'
import killshemar from '../images/bEiPI-.gif'
import ubookit from '../images/ubookit.png'
import '../App.css'

class Projects extends React.Component {
  state = {
    rockmuser: false,
    eike: false,
    musi: false,
    booktrade: false,
    killshemar: false,
    ubookit: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  rockmuserSwitch = () => {
    this.setState({rockmuser: !this.state.rockmuser})
  }

  eikeSwitch = () => {
    this.setState({eike: !this.state.eike})
  }

  musiSwitch = () => {
    this.setState({musi: !this.state.musi})
  }

  booktradeSwitch = () => {
    this.setState({booktrade: !this.state.booktrade})
  }

  killshemarSwitch = () => {
    this.setState({killshemar: !this.state.killshemar})
  }

  ubookitSwitch = () => {
    this.setState({ubookit: !this.state.ubookit})
  }

  render(){
    return (
      <div className="projectcontainers">
          <h1 className='pagehead'>Projects</h1>
        <div className="projects">
        <div className="project">
          <div>
            <h2>Rockmuser</h2>
            <h4>Social Media App for Bands and Fans</h4>
            <img className="demopics" src={rockmuser} />
            <br/>
            {!this.state.rockmuser ? <button className="info" onClick={this.rockmuserSwitch}>More Info</button> : <p>Rockmuser is a social media website for musicians and music fans built with React.js and Redux using a Rails
             API. It features two different types of user accounts: One for bands/musicians and one for fans. Musician accounts can embed music videos on their
             profile, while fan accounts can browse bands. Browsing is limited to only their own fans for bands and musicians to minimize bands spamming each other.
             Users can log in using JavaScript Web Token for authentication and upload profile pictures with Active Storage.</p>}
             <br/>
             <span><a href="https://youtu.be/V27Ws13bHOs" target="_parent">Rockmuser - Full Video Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/mod5project">Rockmuser - Github</a></span>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Backing Animation for Song</h2>
            <h4>For usage with live performances</h4>
            <img className="demopics" src={eike} />
            <br/>
            {!this.state.eike ? <button className="info" onClick={this.eikeSwitch}>More Info</button> : <p>This is animation for Everything I Know Explodes, a song by Symfinity. While not a true music video,
            it is a video intended to be used with live performance when the band plays during times when a screen or projector is available. The animation was built with p5.js.</p>}
             <br/>
             <span><a href="https://youtu.be/_zwWNfqWzLc">Animation - Full Video Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/eike-song-animation">Github</a></span>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Musi</h2>
            <h4>Ruby Gem Using Music Theory</h4>
            <img className="demopics" src={musi} />
            <br/>
            {!this.state.musi ? <button className="info" onClick={this.musiSwitch}>More Info</button> : <p>Musi is a Ruby gem. It contains many methods designed to alter a note given in string form (i.e. "C", "D#", "Gb").
            The methods return a new string based on the transposition of the interval that is desired. Tested with RSpec. MIT lisence. </p>}
             <br/>
             <span><a href="https://rubygems.org/gems/musi/versions/1.0.2">Musi - Download</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/musi">Rockmuser - Github</a></span>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Kill Shemar</h2>
            <h4>2-Player Game</h4>
            <img className="demopics" src={killshemar} />
            <br/>
            {!this.state.killshemar ? <button className="info" onClick={this.killshemarSwitch}>More Info</button> : <p>Kill Shemar is a two-player game. It was built with a Rails backend and Javascript frontend with p5.js. It uses socket.io for the
            multiplayer aspect. It is a cat-and-mouse style game where the Shemar player tries to evade for 60 seconds and the Ship player tries to catch Shemar with it's firepower. The Shemar player can run, jump, use the platforms and portal,
            and even become invinsible (with a time penalty) for a few seconds. The ship can fly around and fire, but must carefully the playforms. It may also deploy a space lizard (with a time penalty) which automatically tries to catch Shemar on
            it's own. The lizard goes away however if the ship hits it!</p>}
             <br/>
             <span><a href="https://www.youtube.com/watch?v=ZSUhZpJ4Xns">Kill Shemar - Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/killshemar">Kill Shemar - Github</a></span>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>BookTrade</h2>
            <h4>Book Exchange App</h4>
            <img className="demopics" src={booktrade} />
            <br/>
            {!this.state.booktrade ? <button className="info" onClick={this.booktradeSwitch}>More Info</button> : <p>BookTrade is an app where users can trade books they wish to donate for credits that can be exchanged
            for books from other users. It uses Google API for book data and features a React.js frontend and Rails backend. </p>}
             <br/>
             <a href="https://github.com/Eselbeus/BookTrade-frontend">BookTrade - Github</a>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>UBookIt</h2>
            <h4>Automated Band-Booking App</h4>
            <img className="demopics" src={ubookit} />
            <br/>
            {!this.state.ubookit ? <button className="info" onClick={this.ubookitSwitch}>More Info</button> : <p>UBookIt is an automated band-booking website built with embedded Ruby. Users may sign up as either a musician or
            a venue owner. Venue owners can create slots at venues that they need filled and artists can book them. </p>}
             <br/>
             <a href="https://github.com/Eselbeus/ubookit">UBookIt - Github</a>
          </div>
          </div>
        </div>
      </div>
    )
  }


}

export default Projects
