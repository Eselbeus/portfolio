import React from 'react'
import rockmuser from '../images/LRM_Zd.gif'

class Projects extends React.Component {
  state = {
    rockmuser: false
  }

  rockmuserSwitch = () => {
    this.setState({rockmuser: !this.state.rockmuser})
  }

  render(){
    return (
      <div className="pagecontainers">
        <h1 className='pagehead'>Projects</h1>
        <div>
          <h2>Rockmuser</h2>
          <img src={rockmuser} />
          <br/>
          {!this.state.rockmuser ? <button onClick={this.rockmuserSwitch}>More Info</button> : <p>Rockmuser is a social media website for musicians and music fans built with React.js and Redux using a Rails
           API. It features two different types of user accounts: One for bands/musicians and one for fans. Musician accounts can embed music videos on their
           profile, while fan accounts can browse bands. Browsing is limited to only their own fans for bands and musicians to minimize bands spamming each other.
           Users can log in using JavaScript Web Token for authentication and upload profile pictures with Active Storage.</p>}
           <br/>
           <a href="https://youtu.be/V27Ws13bHOs">Rockmuser Full - Video Demo</a>
        </div>
      </div>
    )
  }


}

export default Projects
