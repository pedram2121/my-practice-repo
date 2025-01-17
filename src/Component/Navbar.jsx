import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container'


function Navbar() {
  return (

 <Container>
      <div className={style.navbarHeder}>
        <ul className={style.ul}>
          <li>
            <Link to="/Sport">Sport</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Navbar
