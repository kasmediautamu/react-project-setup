import { Link, useHistory } from "react-router-dom"
import Button from "../BaseForm/Button"
import BaseDropDown from "../BaseForm/Dropdown"
import InputGroup from "../BaseForm/InputGroup"
import _toggleL from '../../assets/i/toggleleft.svg'
import _squares from '../../assets/i/squares.svg'
import _menu from '../../assets/i/menu.svg'
import './styles.scss'

const Form =()=>{
   let history = useHistory()
   const changeLocation =()=>{
       return history.push('/new-template-info')
   }
    return (
        <form className="search__form">
            <div className="search__form--header">
                <p>template manager</p>
                <Button primary="button" onClick={changeLocation}>new template</Button>
            </div>
            <div className="search__form--fields">
                <div className="left">
                <InputGroup placeholder={`Search by file name or template content`}/>
                </div>
                <div className="right">
                    <div className="select-boxes">
                    <BaseDropDown options={['']}/>
                    </div>
                    <div className="select-boxes">
                    <BaseDropDown options={['']}/>
                    </div>
                    <div className="toggle">
                        <p>only show current version</p>
                        <img src={_toggleL} alt="" />
                    </div>
                    <div className="menu__icons">
                        <Link to={`/`}><img src={_squares} alt="" /></Link>
                        <Link to={`/templates-list`}><img src={_menu} alt="" /></Link>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Form