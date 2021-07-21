import Button from '../../BaseForm/Button'
import Dropdown from '../../BaseForm/Dropdown'
import Input from '../../BaseForm/InputField'
import './styles.scss'
const CustomerDocumentationForm =()=>{
return (
    <form className="customer__form">
        <p className="form__heading">save customer documentation </p>
        <Input _name="name" type="text" _placeholder="enter document name" _label="Name"/>
        <Input _name="templatename" type="text" _placeholder="2021 BSST-PPO" _label="Template Name"/>
        <Dropdown options={['']}/>
        <div className="form__buttons">
            <Button primary="button">Save</Button>
            <Button primary="button">Cancel</Button>
        </div>
    </form>
)
}
export default CustomerDocumentationForm