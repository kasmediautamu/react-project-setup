import './styles.scss'

type IField = {
  _placeholder?: string
  _label?: string
  type: string
  _name: string
}
function Input(props: IField) {
  const { _placeholder, _label, type, _name } = props
  return (
    <div className="mb-3 input__fields">
      <label htmlFor={_name} className="form-label ">
        {_label}
      </label>
      <input type={type} name={_name} placeholder={_placeholder} />
    </div>
  )
}
export default Input
