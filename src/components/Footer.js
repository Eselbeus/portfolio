import React from 'react'

class Footer extends React.Component {
  state = {
    reveal: false
  }

  revealer = () => {
    this.setState({reveal: true})
  }

  render(){
    return(
      <div className="footnote">
        <p onClick={this.revealer}>Built by Seann Branchfield using React.js and p5.js. Back end with Python/Flask. 2019-2020</p>
        {this.state.reveal ? <p>PS some of the missles collide and make bigger explosions if you click in the right spots...</p> : ''}
      </div>
    )
  }
}

export default Footer;
