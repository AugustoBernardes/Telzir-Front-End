import React, { useEffect, useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

import classes from "../header/Header.module.scss"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size,setSize] = useState({
    width:0,
    height:0
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize",handleResize)

    return () => window.removeEventListener("resize",handleResize)
  },[])

  // Cheking page width
  useEffect(() => {
    if(size.width > 760){
      setMenuOpen(false)
    }
  },[size.width,menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <a className={classes.header_content_logo} href="/"><h2>Telzir</h2></a>
        <nav className={`${classes.header_content_nav} ${menuOpen ? classes.isMenu : ""}`}>
          <ul>
              <li onClick={menuToggleHandler}>
                <a href="/">Home</a>
              </li>
              <li onClick={menuToggleHandler}>
                <a href="/">About</a>
              </li>
              <li onClick={menuToggleHandler} >
                <a href="#social"  >Contact</a>
              </li>
          </ul>
          <button>Sign In</button>
        </nav>
        <div className={classes.header_content_toggle}>
          {menuOpen ? <AiOutlineClose onClick={menuToggleHandler}/> : <GiHamburgerMenu onClick={menuToggleHandler}/>}
        </div>
      </div>    
    </header>
  )
}

export default Header