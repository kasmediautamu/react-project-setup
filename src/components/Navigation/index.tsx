import { Link } from 'react-router-dom'
import './styles.scss'
const Navigation =()=>{

    return (
        <div className="navigation">
            <div className="navigation__mini">
                <Link to={""}>Login</Link>
                <Link to={""}>Register</Link>
            </div>
            <hr />
            <div className="navigation__main">
                <div className="logo">LOGOHERE</div>
                <ul className="navigation__main--list">
                    <Link to={""}>home</Link>
                    <Link to={""}>provider registration</Link>
                    <Link to={""}>contact us</Link>
                </ul>
            </div>
        </div>
    )
}
export default Navigation
