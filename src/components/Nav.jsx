import React, {useState} from 'react'
import Logo from '../assets/my-logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Nav = () => {
  const [bugger, setBugger] = useState(false)
  const handleClick = () => setBugger(!bugger) 
    

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b border-gray-700'>
        <div className='z-10'>
            <img src={Logo} alt="Logo pic" style={{width: '60px'}}/>
        </div>

        {/* menu */}

        <ul className='hidden md:flex'>
          <li className='hover:scale-150 duration-300'>
            <Link to="home" smooth={true} duration={700}>Home</Link>
          </li>
          <li className='hover:scale-150 duration-300'>
            <Link to="about" smooth={true} duration={700}>About</Link>
          </li>
          <li className='hover:scale-150 duration-300'>
            <Link to="skills" smooth={true} duration={700}>Skills</Link>
          </li>
          <li className='hover:scale-150 duration-300'>
            <Link to="work" smooth={true} duration={700}>Work</Link>
          </li>
          <li className='hover:scale-150 duration-300'>
            <Link to="contact" smooth={true} duration={700}>Contact</Link>
          </li>
        </ul>


        {/* Handburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!bugger ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!bugger ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl hover:scale-150 duration-300'>
            <Link onClick={handleClick} to="home" smooth={true} duration={700}>Home</Link>
          </li>
          <li className='py-6 text-4xl hover:scale-150 duration-300'>
            <Link onClick={handleClick} to="about" smooth={true} duration={700}>About</Link>
          </li>
          <li className='py-6 text-4xl hover:scale-150 duration-300'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={700}>Skills</Link>
          </li>
          <li className='py-6 text-4xl hover:scale-150 duration-300'>
            <Link onClick={handleClick} to="work" smooth={true} duration={700}>Work</Link>
          </li>
          <li className='py-6 text-4xl hover:scale-150 duration-300'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={700}>Contact</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="/">
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Nav