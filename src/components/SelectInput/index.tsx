import React from 'react'
import './styles.scss'

interface Props {
  setField: string
}
const SelectInput = ({ setField }: Props) => {
  const mapSelectedValues = (field) => {
    switch (field) {
      case 'documentType':
        return [
          { label: 'Select', value: '' },
          { label: 'Admin Summary', value: 'Admin Summary' },
        ]
      case 'lineOfBusiness':
        return [
          { label: 'Select', value: '' },
          { label: 'Acme Business', value: 'Acme Business' },
        ]
      case 'group':
        return [
          { label: 'Select', value: '' },
          { label: 'All', value: 'All' },
        ]
      case 'fontStyle':
        return [
          { label: 'Select', value: '' },
          { label: 'Level 1 - 14 pt. Bold', value: 'Level 1 - 14 pt. Bold' },
        ]
      default:
        return [{ label: 'Select', value: '' }]
    }
  }

  return (
    <div className="select-input">
      <select>
        {mapSelectedValues(setField).map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <span className="custom-arrow"></span>
    </div>
  )
}

export default SelectInput
