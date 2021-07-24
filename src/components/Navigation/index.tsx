import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './styles.scss'

const Navigation = () => {
  return (
    <div className="navigation">
      <p className="navigation__mini">
        <Link to={''}>Login</Link>|<Link to={''}>Register</Link>
      </p>
      <hr />
      <div className="navigation__main">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="navigation__main--list">
          <Link to={''}>home</Link>
          <Link to={''}>provider registration</Link>
          <Link to={''}>contact us</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
