import React , {useState} from 'react'
import './navbar.css'
import { RxAccessibility } from "react-icons/rx"
import {AiFillCloseCircle } from "react-icons/ai"
import {TbGridDots } from "react-icons/tb"

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  // Function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

 // Function to remove navBar
 const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
        <header className='header flex'>

            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                    <h1>
                        <RxAccessibility className='icon'/>
                        Agritech Farm
                    </h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navLists flex'>

                    <li className='navItem'>
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className='navItem'>
                        <a href="#" className="navLink">Farm</a>
                    </li>

                    <li className='navItem'>
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className='navItem'>
                        <a href="#" className="navLink">About us</a>
                    </li>

                    <button className='btn'>
                        <a href="#">RETRIEVAL</a>
                    </button>
            
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar