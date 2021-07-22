import _toggle from "../../../assets/i/toggle.svg";
import _enter from "../../../assets/i/enter.svg";
import _esc from "../../../assets/i/esc.svg";
import _del from "../../../assets/i/delete.svg"
import _back from "../../../assets/i/back.svg"
import _duplicate from "../../../assets/i/duplicate.svg"
import "./styles.scss";
import Input from "../../BaseForm/InputField";
import { useState } from "react";
import QuestionForm from "../QuestionForm";
const AddQuestion = () => {
  const [show, hide] = useState(true)
  const [showQuestionForm,hideQuestionForm] =useState(false)
  const displayQuestionForm = ()=>{
    hideQuestionForm(!showQuestionForm) 
    console.log('question form display')
  }
  const toggleHead = () => {
    hide(!show) 
    console.log(show);
    
  };
  function QuestionFormToggle(){
   if( showQuestionForm){
     return(
       <QuestionForm />
     )
   } else {
     return null
   }
  }
  function ToggleDisplay() {
    if (show) {
      return (
        
          
         <>
         <Input
            type="text"
            _placeholder="Enter Session Name"
            _name="session_name"
          />
          <div className="session__name--btns">
            <img src={_enter} alt="enter" />
            <img src={_esc} alt="esc" />
          </div>
         </>
        
      );
    } else {
      return (
        
        <>
        <p className="description">General Information</p>
        <div className="session__name--btns session__name--secondary">
        <img src={_duplicate} alt="enter" />
        <img src={_del} alt="esc" />
        <img src={_back} alt="esc" />
      </div>
        </>
      )
    }
  }

  return (
    <form className="question-form">
      {/* form head goes here */}
      <div className="session__name">
      <img src={_toggle} alt="toggle" onClick={toggleHead} />
      <ToggleDisplay/>
      </div>
      
      <div className="session__addquestion" onClick={displayQuestionForm}>
        <p className="session__addquestion--prompt">+Add Question</p>
      </div>

      <p className="session__addquestion--prompt last">+Add section</p>
      <QuestionFormToggle />
    </form>
  );
};
export default AddQuestion;
