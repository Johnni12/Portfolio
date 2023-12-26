import React from 'react'
import Linkedin from '../assets/icon-facebook.svg'
import Github from '../assets/icon-instagram.svg'
import Twitter from '../assets/icon-twitter.svg'

const Navbar = () => {
  return (
    <section className=''>
      <nav className='relative container mx-auto p-6   '>
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
              <img src={Linkedin} alt='linkedin logo' ClassName='w-24 h-24' />
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
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>

        <div className='md:hidden'>
          <div
            id='menu'
            className='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          >
            <a href='#'>Pricing</a>
            <a href='#'>Product</a>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Community</a>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
