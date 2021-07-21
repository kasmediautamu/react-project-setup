import React, { ReactNode } from "react"
import Navigation from "../navigation"
import Footer from "../footer"

interface Props {
  children: ReactNode;
  // any other props that come into the component
}

const Layout = ({ children }: Props) => {
  return(
    <>
      <Navigation/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout