import React, {useState} from 'react';
import Logo from '../assets/my-logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';


const Nav = () => {

  const [bugger, setBugger] = useState(false);
  const handleClick = () => setBugger(!bugger); 


  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center bg-transparent'>
      <div className='w-full md:w-[70%] h-full md:h-[70%] flex justify-between items-center md:shadow-lg px-4 bg-slate-50 rounded-2xl text-black border-gray-700'>
        <div className='z-40'>
            <img src={Logo} alt="Logo pic" style={{width: '60px'}}/>
        </div>

        {/* menu */}

        <ul className='hidden md:flex'>
          <li className='hover:scale-150 duration-300'>
            <Link to="home" smooth={true} duration={700}>Home</Link>
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
        <div onClick={handleClick} className='md:hidden z-40'>
          {!bugger ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <div className={!bugger ? 'md:hidden absolute left-0 ease-in-out -top-[1000px] w-full h-screen duration-1000 bg-[#0a192f] flex flex-col justify-center items-center' : 'absolute top-0 left-0 w-full h-screen duration-1000 ease-in-out bg-[#0a192f] flex flex-col justify-center items-center opacity-90 z-30'}>
          <ul>
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
          <div className='absolute bottom-10'>
            <ul className='grid grid-cols-4 mx-2 gap-4'>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-blue-600 active:scale-110 duration-100'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/charles-nkeonadi-b6b0a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <FaLinkedin size={30}/>
                </a>
              </li>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#333333] active:scale-110 duration-100'>
                <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/I-Barack">
                  <FaGithub size={30}/>
                </a>
              </li>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#6fc2b0] active:scale-110 duration-100'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                  <HiOutlineMail size={30}/>
                </a>
              </li>
              <li className='w-[60px] h-[60px] flex justify-between items-center bg-[#565f69] active:scale-110 duration-100'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                  <BsFillPersonLinesFill size={30}/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className='hidden md:flex flex-col fixed top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/charles-nkeonadi-b6b0a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/I-Barack">
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
    </div>
  )
}

export default Nav