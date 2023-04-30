import React from 'react'
import NavbarInfo from "./NavbarInfo/NavbarInfo";
import NavbarMain from "./NavbarMain/NavbarMain";
import NavElements from "./NavbarElem/NavElements";

const Navbar = () => {
  return (
    <div className="sticky_navbar">
      <NavbarInfo/>
      <NavbarMain/>
      <NavElements/>
    </div>
  )
}

export default Navbar