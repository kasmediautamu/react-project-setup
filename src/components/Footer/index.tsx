import { Link } from "react-router-dom";
import "./styles.scss";
const Footer = () => {
    const getYear=()=> {
        return new Date().getFullYear();
    }
  return (
    <div className="footer">
      <div className="footer__pale"></div>
      <div className="footer__dark">
        <div className="left">
          <p className="footer__links">
            Copyright {getYear()} By Health Olan Services. All Rights Reserved
            <Link to="/"><span className="span__border">Terms of Use</span></Link>
            <Link to="/"><span>Privascy Statement</span></Link>
          </p>
          <img src="" alt="" />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
export default Footer;
