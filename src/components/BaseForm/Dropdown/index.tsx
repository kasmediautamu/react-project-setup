
type IBaseDropDown = {
    options:any
    handleSelect?:any
    _name?:any
};
const BaseDropDown = (props:IBaseDropDown) => {
    const {options,handleSelect,_name} =props
  const RenderOptions = options.map((option:any)=><option value={option} key={Math.random()}>{option}</option>)
    return(
       <select name={_name} className="form-select shadow-none" onChange={handleSelect}>
           {RenderOptions}
       </select>  
    )
};
export default BaseDropDown;
