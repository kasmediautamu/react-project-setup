import { Link, useHistory, useLocation } from "react-router-dom"
import Button from "../BaseForm/Button"
import BaseDropDown from "../BaseForm/Dropdown"
import InputGroup from "../BaseForm/InputGroup"
import _toggleL from '../../assets/i/toggleleft.svg'
import _squares from '../../assets/i/squares.svg'
import _menu from '../../assets/i/menu.svg'
import './styles.scss'

const Form =()=>{
    const pdfTypes =['All Types','Admin Summary','BSS']
    const pdfStatuses =['All Statuses','Completed','Incomplete']
    const Location = useLocation()
    console.log(Location)
    const showHeading =()=>{
        let formhead =""
        if(Location.pathname ==="/" || Location.pathname ==="/templates-list"){
            formhead ="template manager"
        } else if(Location.pathname ==="/search-results"){
            formhead ="Search Results"
        }
        return formhead
    }
    function TemplateButton(){
        if(Location.pathname ==="/" || Location.pathname==="/templates-list"){
            return(
                <Button primary="button" onClick={changeLocation}>new template</Button>  
            )
        }else if(Location.pathname ==="/search-results"){
            return(
                <Button btnClass="back-to-template__btn" primary="button">Back</Button>  
            )
        } else{
            return null
        }
    }
    let history = useHistory()
    const changeLocation =()=>{
       return history.push('/new-template-info')
   }
    return (
        <form className="search__form">
            <div className="search__form--header">
                <p>{showHeading()}</p>
                <TemplateButton/>
            </div>
            <div className="search__form--fields">
                <div className="left">
                <InputGroup placeholder={`Search by file name or template content`}/>
                </div>
                <div className="right">
                    <div className="select-boxes">
                    <BaseDropDown options={pdfTypes}/>
                    </div>
                    <div className="select-boxes">
                    <BaseDropDown options={pdfStatuses}/>
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