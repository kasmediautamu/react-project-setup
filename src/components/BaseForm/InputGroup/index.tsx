import './styles.scss'
import _search from '../../../assets/i/search.svg'
import { ChangeEventHandler } from 'react'
type INPUTS = {
  placeholder?: string
  _name?: any
  valuechange?: ChangeEventHandler
  _value?: string
}
function InputGroup(props: INPUTS) {
  const { placeholder, _name, valuechange, _value } = props
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <button className="btn-icon">
          <img src={_search} alt="" />
        </button>
      </span>
      <input
        {...props}
        name={_name}
        onChange={valuechange}
        placeholder={placeholder}
        value={_value}
      />
    </div>
  )
}
export default InputGroup
