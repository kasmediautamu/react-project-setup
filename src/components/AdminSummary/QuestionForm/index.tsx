import "./styles.scss";
import Hidden from "../../Hidden";
import Input from "../../BaseForm/InputField";
import Dropdown from "../../BaseForm/Dropdown";
import Button from "../../BaseForm/Button";
import _toggle from "../../../assets/i/activetoggle.svg"
import _toggoleInctive from "../../../assets/i/inactivetoggle.svg"
import Dialog from "../../Hidden";

const QuestionForm = () => {
  return (
    <Dialog _className="question__form-dialog">
      <form className="question-form">
        <p className="form__title">Add Question</p>
        <div className="question__detail">
          <p>Question ID</p>
          <p>1.0</p>
        </div>
        <div className="question__detail">
          <p>Required?</p>
          <img src={_toggle} alt="" />
        </div>
        <Input type="text" _name="question" _placeholder="Enter Question..." />
        <Dropdown options={[""]} />
        <div className="form__buttons">
          <Button primary="button">Save</Button>
          <Button primary="button">Cancel</Button>
        </div>
      </form>
    </Dialog>
  );
};
export default QuestionForm;
