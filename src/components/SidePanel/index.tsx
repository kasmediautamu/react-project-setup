import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  heading: string
}

const SidePanel = ({ children, heading }: Props) => {
  return(
    <div className="card side-panel">
      <h3 className="side-panel__heading">{heading}</h3>
      {children}
    </div>
  )
}

export default SidePanel