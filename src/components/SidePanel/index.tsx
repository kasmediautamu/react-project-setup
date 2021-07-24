import { ReactNode } from 'react'
import Button from '../BaseForm/Button'
import './styles.scss'

interface Props {
  children: ReactNode
  heading: string
}

const SidePanel = ({ children, heading }: Props) => {
  return (
    <div className="card side-panel">
      <h3 className="side-panel__heading">{heading}</h3>
      {children}
      <div className="actions-section">
        <Button primary="button" btnClass="action__continue">
          Continue
        </Button>
        <Button primary="button" btnClass="action__cancel">
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default SidePanel
