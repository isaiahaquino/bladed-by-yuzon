import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.css'
import BookBtn from './book'

const Layout = ({ children }) => {

  return (
    <div className='layout'>
      <header>
        <nav>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='logo'>
          <Link to='/'>Logo Here</Link>
        </div>
        <div className='socials'>
          <p>socials here</p>
          <BookBtn />
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <div className='logo'>
          <Link to='/'>Logo Here</Link>
        </div>
        <nav>
          <Link to='/services'>Services</Link>
          <Link to='/about'>About</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='footerInfo'>
          <h2>Hours</h2>
          <p>Mon-Fri: 1200-500PM</p>
        </div>
        <div className='footerInfo'>
          <h2>Location</h2>
          <p>San Diego, CA 92115</p>
        </div>
        <BookBtn />
      </footer>
    </div>
  )
}

export default Layout