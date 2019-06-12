import React from 'react'
import '../App.css'

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="pagecontainers">
        <h1 className='pagehead'>About</h1>
        <p>Seann Branchfield is a full-stack web developer. Originally a musician, he received a M.A. in Music Composition from The City College
        of New York and a M.M. in Scoring for Film and Multimedia from New York University. After years of being a music teacher and performing with the band&nbsp;
        <a href="http://www.symfinity.com">Symfinity</a> which he founded, he enrolled at The Flatiron School and is now an active web developer experienced with Ruby, Rails, Javascript and React.js.
        He is also still active as a composer and a musician.</p>
      </div>
    )
  }
}

export default About
