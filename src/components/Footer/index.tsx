import { Link } from 'react-router-dom'
import './styles.scss'

const Footer = () => {
  const getYear = () => new Date().getFullYear()
  return (
    <footer>
      <div className="footer__pale"></div>
      <div className="footer__dark">
        <div className="left">
          <p className="footer__links">
            Copyright &copy; {getYear()} by HealthPlan Services. All Rights Reserved.
            <Link to="/">
              <span className="span__border">Terms of Use</span>
            </Link>
            <Link to="/">
              <span>Privacy Statement</span>
            </Link>
          </p>
          <img src="" alt="" />
        </div>
        <div className="right"></div>
      </div>
    </footer>
  )
}

export default Footer
