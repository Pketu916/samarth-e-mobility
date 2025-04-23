import React, { useState } from 'react'
import logo from '../assets/samarth-logo_2 1.svg'
import Button from '../UI/Button'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="container-custom font-bdo">
      <nav className="flex justify-between items-center">
        <a href="#" className="soft-bg p-[10px]">
          <img src={logo} alt="logo" />
        </a>

        <ul className="hidden lg:flex w-[655px] justify-between soft-bg py-[11px] px-[15px]">
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#">About Samarth</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#features">Features</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#lifeAtSamarth">Life at Samarth</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#FAQ">FAQ's</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#career">Career</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#contactUs">Contact Us</a></li>
        </ul>

        <Button
          className="text-xl inline lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </Button>

        <Button className="hidden sm:inline text-nowrap">Get in touch →</Button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-2 soft-bg p-4">
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#">About Samarth</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#features">Features</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#lifeAtSamarth">Life at Samarth</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#FAQ">FAQ's</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#career">Career</a></li>
          <li className="nav-link hover:bg-[#FFFFFF12]"><a href="#contactUs">Contact Us</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
