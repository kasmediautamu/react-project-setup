type IBaseDropDown = {
    options:[any]
};
const BaseDropDown = (props:IBaseDropDown) => {
    const {options} =props
  return (
    <select name="" className="form-select">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};
export default BaseDropDown;
