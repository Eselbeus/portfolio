import React from 'react'
import medium from "../images/mediumlogo.png"
import github from "../images/githublogo.png"
import linkedin from "../images/linkedinlogo.png"
import twitter from "../images/twitterlogo.png"

import '../App.css';

function Header() {
  return (
    <div className="banner">
      <h1>Seann Branchfield</h1>
      <h3>Full-Stack Web Developer</h3>
      <div className="buttons">
      <a href="https://seannbranchfield.medium.com/" target="_parent"><img className="linklogos" src={medium}/></a>
      <a href="https://github.com/Eselbeus/" target="_parent"><img className="linklogos" src={github}/></a>
      <a href="https://www.linkedin.com/in/seannbranchfield/" target="_parent"><img className="linklogos" src={linkedin}/></a>
      <a href="https://twitter.com/slbranchfield" target="_parent"><img className="linklogos" src={twitter}/></a>
      </div>
    </div>
  );
}

export default Header;
