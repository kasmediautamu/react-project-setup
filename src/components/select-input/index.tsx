import React from 'react'
import './styles.scss'


const SelectInput: React.FC = () => {
  return (
    <div className="select-input">
      <select>
        <option>Default select</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <span className="custom-arrow"></span>
    </div>
  )
}

export default SelectInput