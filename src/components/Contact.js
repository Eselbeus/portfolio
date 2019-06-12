import React from 'react'

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="pagecontainers">
        <h1 className='pagehead'>Contact</h1>
        <h3>LinkedIn: <a href="https://www.linkedin.com/in/seannbranchfield/">https://www.linkedin.com/in/seannbranchfield/</a></h3>
        <h3>Blog: <a href="https://medium.com/@eselbeus">https://medium.com/@eselbeus</a></h3>
        <h3>Email: <a href="mailto:eselbeus@gmail.com">eselbeus@gmail.com</a></h3>
      </div>
    )
  }

}

export default Contact
