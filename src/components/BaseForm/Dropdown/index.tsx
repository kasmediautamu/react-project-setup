
type IBaseDropDown = {
    options:any
};
const BaseDropDown = (props:IBaseDropDown) => {
    const {options} =props
  // return (
  //   <select name="" className="form-select shadow-none">
  //      {options.map((option) => {
  //             return (
  //               <div key={Math.random()}className="selected__option">
  //                 <option value="">{option}</option>
  //               </div>
  //             );
  //           })}
  //   </select>
  // );
  const RenderOptions = options.map((option:any)=><option key={Math.random()}>{option}</option>)
    return(
       <select name="" id="" className="form-select shadow-none">
           {RenderOptions}
       </select>  
    )
};
export default BaseDropDown;
