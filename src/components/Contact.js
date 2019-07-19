import React from 'react'
import '../App.css'

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="pagecontainers">
        <h1 className='pagehead'>Contact</h1>
        <h3>LinkedIn: <a href="https://www.linkedin.com/in/seannbranchfield/" target="_parent">https://www.linkedin.com/in/seannbranchfield/</a></h3>
        <h3>Blog: <a href="https://medium.com/@eselbeus" target="_parent">https://medium.com/@eselbeus</a></h3>
        <h3>Email: <a href="mailto:eselbeus@gmail.com" target="_parent">eselbeus@gmail.com</a></h3>
      </div>
    )
  }

}

export default Contact
