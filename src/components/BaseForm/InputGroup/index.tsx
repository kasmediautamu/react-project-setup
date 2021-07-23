import "./styles.scss";
import _search from '../../../assets/i/search.svg'
type INPUTS ={
  placeholder?:string
  onclick?:any
}
function InputGroup(props: INPUTS) {
  const {placeholder,onclick} = props
  return (
    <div className="input-group mb-3">
      <span className="input-group-text"><img src={_search} alt="" onClick={onclick}/></span>
      <input {...props} placeholder={placeholder} />
    </div>
  );
}
export default InputGroup;
