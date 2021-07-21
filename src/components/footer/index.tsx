import React from "react"
import './styles.scss'

const Footer: React.FC = () => {
  return(
    <footer>
      <div className="copyright-section">
        <p>Copyright &copy; 2021 by HealthPlan services. ALL Rights Reserved. <a href="/">Terms and Conditions</a> | <a href="/">Privacy Statement</a></p>
      </div>
    </footer>
  )
}

export default Footer