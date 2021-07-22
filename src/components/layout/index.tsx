import React, { ReactNode } from "react"

interface Props {
  children: ReactNode;
  // any other props that come into the component
}

const Layout = ({ children }: Props) => {
  return(
    <>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout