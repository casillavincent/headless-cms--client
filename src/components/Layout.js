import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import "../scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
