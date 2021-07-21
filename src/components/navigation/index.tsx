import React from "react"
import './styles.scss'
import Logo from '../../assets/images/logo.png'

const Navigation: React.FC = () => {
  return (
    <>
      <div className="header">
        <p><a href="/">Login</a> | <a href="/">Register</a></p>
      </div>
      <nav>
        <img src={Logo} alt="logo" />
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Provider Registration</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation