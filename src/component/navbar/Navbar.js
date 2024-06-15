import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
const NavBar = () => {
    return(
        <nav className='navbar'>
            <h3 className='logo'>Web Technology</h3>
            <ul className='nav-links'>
                <Link to="/" className="home">
                <li>Home</li></Link>
                <Link to="/about" className="about">
                <li>About</li></Link>
                <Link to="/contact" className="contact">
                <li>Contact</li></Link>
                <Link to="/course" className="Course">
                <li>Product</li></Link>




            </ul>
        </nav>
    )
}
export default NavBar