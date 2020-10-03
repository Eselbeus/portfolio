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
        <h2>This Site</h2>
        <p>This site is built with React.js frontend and a Python/Flask backend. For hosting I use Netlify and domain provider I use <a href="https://namecheap.pxf.io/LvY6O">Namecheap</a>.</p>
        <br/>
        <iframe id="$iradid" src="//a.impactradius-go.com/gen-ad-code/2499940/459741/5618/" width="300" height="250" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        <p className='disclaimer'>I am an affliate of Namecheap so I may receive compensation for any sales from links above.</p>
      </div>
    )
  }
}

export default About
