import "./styles.scss";
import _search from '../../../assets/i/search.svg'
function InputGroup(props: any) {
  const {placeholder} = props
  return (
    <div className="input-group mb-3">
      <span className="input-group-text"><img src={_search} alt="" /></span>
      <input {...props} placeholder={placeholder} />
    </div>
  );
}
export default InputGroup;
