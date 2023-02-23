import React, { useState } from 'react'
import images from '../assets/images';
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri'
import { navLinks } from '../constants';

const Menu = () => (
  <ul className='list-none sm:flex hidden justify-end items-center  flex-1'>
    {navLinks.map((nav, index) => (
      <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] 
    ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={images.logo1} alt="" className='w-[32px] h-[25px] mr-1'/>
      <img src={images.logo} alt="hoobank" className="w-[83px] h-[20px]" />
      <Menu />
      <div className='sm:hidden flex flex-1 justify-end items-end'>
        {toggleMenu ?
          <RiCloseFill className='w-[28px] h-[28px] object-contain text-white cursor-pointer' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line className='w-[28px] h-[28px] object-contain text-white cursor-pointer' onClick={() => setToggleMenu(true)} />
        }

        <div className={`${!toggleMenu ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] 
    ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>


    </nav>
  )
}

export default Navbar;
