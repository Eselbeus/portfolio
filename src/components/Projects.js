import React from 'react'
import rockmuser from '../images/LRM_Zd.gif'
import musi from '../images/musiscreenshot.png'
import booktrade from '../images/booktrade.png'
import killshemar from '../images/bEiPI-.gif'
import '../App.css'

class Projects extends React.Component {
  state = {
    rockmuser: false,
    musi: false,
    booktrade: false
  }

  rockmuserSwitch = () => {
    this.setState({rockmuser: !this.state.rockmuser})
  }

  musiSwitch = () => {
    this.setState({musi: !this.state.musi})
  }

  booktradeSwitch = () => {
    this.setState({booktrade: !this.state.booktrade})
  }

  render(){
    return (
      <section className="pagecontainers">
          <h1 className='pagehead'>Projects</h1>
        <div className="project">
          <div>
            <h2>Rockmuser</h2>
            <h4>Social Media App for Bands/Musicians and Music Fans</h4>
            <img className="demopics" src={rockmuser} />
            <br/>
            {!this.state.rockmuser ? <button className="info" onClick={this.rockmuserSwitch}>More Info</button> : <p>Rockmuser is a social media website for musicians and music fans built with React.js and Redux using a Rails
             API. It features two different types of user accounts: One for bands/musicians and one for fans. Musician accounts can embed music videos on their
             profile, while fan accounts can browse bands. Browsing is limited to only their own fans for bands and musicians to minimize bands spamming each other.
             Users can log in using JavaScript Web Token for authentication and upload profile pictures with Active Storage.</p>}
             <br/>
             <span><a href="https://youtu.be/V27Ws13bHOs">Rockmuser - Full Video Demo</a> | <a href="https://github.com/Eselbeus/mod5project">Rockmuser - Github</a></span>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Musi</h2>
            <h4>Ruby Gem Using Music Theory</h4>
            <img className="demopics" src={musi} />
            <br/>
            {!this.state.musi ? <button className="info" onClick={this.musiSwitch}>More Info</button> : <p>Musi is a Ruby gem. It contains many methods designed to alter a note given in string form (i.e. "C", "D#", "Gb").
            The methods return a new string based on the transposition of the interval that is desired. Tested with RSpec. MIT liscence. </p>}
             <br/>
             <span><a href="https://rubygems.org/gems/musi/versions/1.0.2">Musi - Download</a>  | <a href="https://github.com/Eselbeus/musi">Rockmuser - Github</a></span>
          </div>
        </div>
        <div className="project">
          <div>
            <h2>Kill Shemar</h2>
            <h4>2-Player Game</h4>
            <img className="demopics" src={killshemar} />
            <br/>
            {!this.state.booktrade ? <button className="info" onClick={this.booktradeSwitch}>More Info</button> : <p>Kill Shemar is a two-player game. It was built with a Rails backend and Javascript frontend with p5.js. It uses socket.io for the
            multiplayer aspect. It is a cat-and-mouse style game where the Shemar player tries to evade for 60 seconds and the Ship player tries to catch Shemar with it's firepower. The Shemar player can run, jump, use the platforms and portal,
            and even become invinsible (with a time penalty) for a few seconds. The ship can fly around and fire, but must carefully the playforms. It may also deploy a space lizard (with a time penalty) which automatically tries to catch Shemar on
            it's own. The lizard goes away however if the ship hits it!</p>}
             <br/>
             <a href="https://github.com/Eselbeus/killshemar">Kill Shemar - Github</a>
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
      </section>
    )
  }


}

export default Projects