import React, { useState } from 'react'
import Facebook from '../assets/icon-facebook.svg'
import Github from '../assets/icon-instagram.svg'
import Twitter from '../assets/icon-twitter.svg'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <section className=''>
      <nav className='relative container mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <a href='#' className='hover:text-darkGrayishBlue text-2xl'>
              Kalu John
            </a>
          </div>

          <div className='hidden space-x-6 md:flex'>
            <a href='#projects' className='hover:text-darkGrayishBlue'>
              Projects
            </a>
            <a href='#tech' className='hover:text-darkGrayishBlue'>
              Technologies
            </a>
            <a href='#contact' className='hover:text-darkGrayishBlue'>
              Contact
            </a>
          </div>

          <div className='hidden space-x-6 md:flex'>
            <a href='#' className='hover:text-darkGrayishBlue'>
              <img src={Facebook} alt='linkedin logo'/>
            </a>
            <a href='#' className='hover:text-darkGrayishBlue'>
              <img src={Github} alt='github logo' />
            </a>
            <a href='#' className='hover:text-darkGrayishBlue'>
              <img src={Twitter} alt='twitter logo' />
            </a>
          </div>

          <button
            id='menu-btn'
            className='block hamburger md:hidden focus:outline-none'
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
            
              <span className='close-icon font-extrabold text-lg'>X</span>
            ) : (
              <>
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
              </>
            )}
          </button>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className='absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-[rgb(15,23,36)] bg-opacity-50 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
            <a href='#projects' className='hover:text-darkGrayishBlue'>
              Projects
            </a>
            <a href='#tech' className='hover:text-darkGrayishBlue'>
              Technologies
            </a>
            <a href='#contact' className='hover:text-darkGrayishBlue'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
