import "./styles.scss";
import Input from "../../BaseForm/InputField";
import Dropdown from "../../BaseForm/Dropdown";
import Button from "../../BaseForm/Button";
import _toggle from "../../../assets/i/activetoggle.svg"
import _toggoleInctive from "../../../assets/i/inactivetoggle.svg"
import Dialog from "../../Hidden";

const QuestionForm = () => {
  const questionOptions =['Display only','Text','Numeric','Phone Number','Address','Email Address','Date','Dollar','Yes/No Choices','Multiple Choices','Checkboxes','Dropdown Selection','Dropdown Multi-Selection']
  return (
    <Dialog _className="question__form-dialog">
      <form className="question-form">
        <p className="form__title">Add Question</p>
        <div className="question__detail">
          <p className="id__label">Question ID</p>
          <p className="idnumber">1.0</p>
        </div>
       
        <div className="question__detail">
          {/* <p>Required?</p> */}
          <img src={_toggle} alt="" />
        </div>
       
        <Input type="text" _name="question" _placeholder="Enter Question..." />

        <Dropdown options={questionOptions} />
        <div className="form__buttons">
          <Button primary="button">Save</Button>
          <Button primary="button">Cancel</Button>
        </div>
      </form>
    </Dialog>
  );
};
export default QuestionForm;
