import React from 'react'
import rockmuser from '../images/LRM_Zd.gif'
import eike from '../images/eike.gif'
import woodyandclay from '../images/woodyandclay.png'
import dyna from '../images/dyna.gif'
import musi from '../images/musiscreenshot.png'
import booktrade from '../images/booktrade.png'
import killshemar from '../images/bEiPI-.gif'
import ubookit from '../images/ubookit.png'
import symfinity from '../images/symfinitydotcom.png'
import apromotions from '../images/apromotions.png'
import newmuse from '../images/newmuse.png'
import topent from '../images/topent.png'
import plucky from '../images/plucky.png'
import echomusings from '../images/Echomusings.png'
import discotree from '../images/discotreedemo.png'
import '../App.css'

class Projects extends React.Component {
  state = {
    rockmuser: false,
    woodyandclay: false,
    eike: false,
    dyna: false,
    musi: false,
    booktrade: false,
    killshemar: false,
    ubookit: false,
    symfinity: false,
    apromotions: false,
    newmusestudio: false,
    topentertainment: false,
    plucky: false,
    echomusings: false
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  rockmuserSwitch = () => {
    this.setState({rockmuser: !this.state.rockmuser})
  }

  symfinitySwitch = () => {
    this.setState({symfinity: !this.state.symfinity})
  }

  woodyandclaySwitch = () => {
    this.setState({woodyandclay: !this.state.woodyandclay})
  }

  eikeSwitch = () => {
    this.setState({eike: !this.state.eike})
  }

  dynaSwitch = () => {
    this.setState({dyna: !this.state.dyna})
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

  aPromotions = () => {
    this.setState({apromotions: !this.state.apromotions})
  }

  ubookitSwitch = () => {
    this.setState({ubookit: !this.state.ubookit})
  }

  newmuseSwitch = () => {
    this.setState({newmusestudio: !this.state.newmusestudio})
  }

  topentertainmentSwitch = () => {
    this.setState({topentertainment: !this.state.topentertainment})
  }

  pluckySwitch = () => {
    this.setState({plucky: !this.state.plucky})
  }

  echoMusingsSwitch = () => {
    this.setState({echomusings: !this.state.echomusings})
  }

  render(){
    return (
      <div className="projectcontainers">
          <h1 className='pagehead'>Projects</h1>
          <p className="projects-info">Projects include deployed websites: Built with React/Redux, Ruby on Rails, Vue, HTML/Vanilla JS, and Python/Flask backend. Usage of CI/CD piplines with Echo Musings. Also included are deployed Ruby Gem, Animations built with p5.js and Java/Swing, and other React/Rails demos.</p>
        <div className="projects">

        <div className="project">
          <div className="project-details">
            <h2>EchoMusings.com</h2>
            <h4>Music News and Podcast</h4>
            <img className="demopics" src={echomusings} />
            <br/>
            {!this.state.echomusings ? <button className="info" onClick={this.echoMusingsSwitch}>More Info</button> : <p>Echo Musings is a music news and podcast site built with React and Redux using a Ruby on Rails
             API. It features both news articles and podcasts which site admins can upload by logging in with JWT authentication. It is styled with SCSS and is mobile friendly. The frontend is deployed to Netlify
             and the backend is deployed to Heroku. Usage of CI/CD is made with Heroku and Netlify's pipeline features.
             </p>}
             <br/>
             <span><a href="https://echomusings.com" target="_parent">Official Website</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/echomusings" target="_parent">EchoMusings - Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Symfinity.com</h2>
            <h4>Band Website - Built with React</h4>
            <img className="demopics" src={symfinity} />
            <br/>
            {!this.state.symfinity ? <button className="info" onClick={this.symfinitySwitch}>More Info</button> : <p>Symfinity.com is built with React. It is a band website designed to be mobile-friendly with heavy usage of media queries for different devices.</p>}
             <br/>
             <span><a href="http://symfinity.com" target="_parent">Symfinity - Official Site</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/symfinity-website-frontend" target="_parent">Symfinity - Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Newmusestudios.com</h2>
            <h4>Python/Flask Backend</h4>
            <img className="demopics" src={newmuse} />
            <br/>
            {!this.state.newmusestudio ? <button className="info" onClick={this.newmuseSwitch}>More Info</button> : <p>Newmusestudios.com is a website for a recording studio. It uses a React frontend and Python/Flask backend. The backend handles the contact form and sents an email with "smtplib" to the studio manager whenever anyone fills it out. API hosted through Heroku and frontend through Netlify.</p>}
             <br/>
             <span><a href="http://newmusestudios.com" target="_parent">Official Website</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/newmusestudio" target="_parent">Github - Frontend</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>TOPentertainment.rocks</h2>
            <h4>React Frontend</h4>
            <img className="demopics" src={topent} />
            <br/>
            {!this.state.topentertainment ? <button className="info" onClick={this.topentertainmentSwitch}>More Info</button> : <p>TOPentertainment is a music industry site for mentoring bands. Built with React, it features an extensive subnavigation menu.</p>}
             <br/>
             <span><a href="https://zealous-borg-441d98.netlify.app/" target="_parent">Official Website</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/topent" target="_parent">Github - Frontend</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Discotreeny.com</h2>
            <h4>React Frontend</h4>
            <img className="demopics" src={discotree} />
            <br/>
            {!this.state.plucky ? <button className="info" onClick={this.pluckySwitch}>More Info</button> : <p>NYC event site. Features react-scroll.</p>}
             <br/>
             <span><a href="https://discotreeny.com/" target="_parent">Official Website</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/discotree" target="_parent">Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Rockmuser</h2>
            <h4>Social Media App for Bands and Fans</h4>
            <img className="demopics" src={rockmuser} />
            <br/>
            {!this.state.rockmuser ? <button className="info" onClick={this.rockmuserSwitch}>More Info</button> : <p>Rockmuser is a social media website for musicians and music fans built with React.js and Redux using a Rails
             API. It features two different types of user accounts: One for bands/musicians and one for fans. Musician accounts can embed music videos on their
             profile, while fan accounts can browse bands. Browsing is limited to only their own fans for bands and musicians to minimize bands spamming each other.
             Users can log in using JavaScript Web Token for authentication and upload profile pictures with Active Storage.</p>}
             <br/>
             <span><a href="https://youtu.be/V27Ws13bHOs" target="_parent">Rockmuser - Video Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/symfinity-website-frontend" target="_parent">Rockmuser - Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Backing Animation for Song</h2>
            <h4>For live performances (p5.js)</h4>
            <img className="demopics" src={eike} />
            <br/>
            {!this.state.eike ? <button className="info" onClick={this.eikeSwitch}>More Info</button> : <p>This is animation for Everything I Know Explodes, a song by Symfinity. While not a true music video,
            it is a video intended to be used with live performance when the band plays during times when a screen or projector is available. The animation was built with p5.js.</p>}
             <br/>
             <span><a href="https://youtu.be/_zwWNfqWzLc" target="_parent">Animation - Video Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/eike-song-animation" target="_parent">Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Adventures of Woody and Clay</h2>
            <h4>Website for an Online Comic</h4>
            <img className="demopics" src={woodyandclay} />
            <br/>
            {!this.state.woodyandclay ? <button className="info" onClick={this.woodyandclaySwitch}>More Info</button> : <p>This is a website for an old online comic strip called Adventures of Woody and Clay (possible new episodes coming). Built with HTML, SCSS and Javascript. </p>}
             <br/>
             <span><a href="http://woodyandclay.xyz" target="_parent">Official Website</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/adventuresofwoodyandclay" target="_parent">Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Musi</h2>
            <h4>Ruby Gem Using Music Theory</h4>
            <img className="demopics" src={musi} />
            <br/>
            {!this.state.musi ? <button className="info" onClick={this.musiSwitch}>More Info</button> : <p>Musi is a Ruby gem. It contains many methods designed to alter a note given in string form (i.e. "C", "D#", "Gb").
            The methods return a new string based on the transposition of the interval that is desired. Tested with RSpec. MIT lisence. </p>}
             <br/>
             <span><a href="https://rubygems.org/gems/musi/versions/1.0.2" target="_parent">Musi - Download</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/musi" target="_parent">Musi - Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Kill Shemar</h2>
            <h4>2-Player Game</h4>
            <img className="demopics" src={killshemar} />
            <br/>
            {!this.state.killshemar ? <button className="info" onClick={this.killshemarSwitch}>More Info</button> : <p>Kill Shemar is a two-player game. It was built with a Rails backend and Javascript frontend with p5.js. It uses socket.io for the
            multiplayer aspect. It is a cat-and-mouse style game where the Shemar player tries to evade for 60 seconds and the Ship player tries to catch Shemar with it's firepower. The Shemar player can run, jump, use the platforms and portal,
            and even become invinsible (with a time penalty) for a few seconds. The ship can fly around and fire, but must carefully the playforms. It may also deploy a space lizard (with a time penalty) which automatically tries to catch Shemar on
            it's own. The lizard goes away however if the ship hits it!</p>}
             <br/>
             <span><a href="https://www.youtube.com/watch?v=ZSUhZpJ4Xns" target="_parent">Kill Shemar - Video Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/killshemar" target="_parent">Kill Shemar - Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Backing Animation for Song</h2>
            <h4>For live performances (Java/Swing)</h4>
            <img className="demopics" src={dyna} />
            <br/>
            {!this.state.dyna ? <button className="info" onClick={this.dynaSwitch}>More Info</button> : <p>This is animation for Dynamite, a song by Symfinity. While not a true music video,
            it is a video intended to be used with live performance when the band plays during times when a screen or projector is available. The animation was built with Java and Swing.</p>}
             <br/>
             <span><a href="https://youtu.be/XD-lH9g_xb8" target="_parent">Animation - Video Demo</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/dynamite-visuals" target="_parent">Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>Alissa Aikio Promotions</h2>
            <h4>Vue Frontend</h4>
            <img className="demopics" src={apromotions} />
            <br/>
            {!this.state.apromotions ? <button className="info" onClick={this.aPromotions}>More Info</button> : <p>This is my first website built with Vue. It is a basic site that uses VueRouter. Deployed to Netlify.</p>}
             <br/>
             <span><a href="https://cranky-poitras-1c1d5a.netlify.com/" target="_parent">Live Site</a>&nbsp;|&nbsp;<a href="https://github.com/Eselbeus/a-promotions" target="_parent">Github</a></span>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>BookTrade</h2>
            <h4>Book Exchange App</h4>
            <img className="demopics" src={booktrade} />
            <br/>
            {!this.state.booktrade ? <button className="info" onClick={this.booktradeSwitch}>More Info</button> : <p>BookTrade is an app where users can trade books they wish to donate for credits that can be exchanged
            for books from other users. It uses Google API for book data and features a React.js frontend and Rails backend. </p>}
             <br/>
             <a href="https://github.com/Eselbeus/BookTrade-frontend" target="_parent">BookTrade - Github</a>
          </div>
        </div>

        <div className="project">
          <div className="project-details">
            <h2>UBookIt</h2>
            <h4>Automated Band-Booking App</h4>
            <img className="demopics" src={ubookit} />
            <br/>
            {!this.state.ubookit ? <button className="info" onClick={this.ubookitSwitch}>More Info</button> : <p>UBookIt is an automated band-booking website built with embedded Ruby. Users may sign up as either a musician or
            a venue owner. Venue owners can create slots at venues that they need filled and artists can book them. </p>}
             <br/>
             <a href="https://github.com/Eselbeus/ubookit" target="_parent">UBookIt - Github</a>
          </div>
          </div>
        </div>
      </div>
    )
  }


}

export default Projects
