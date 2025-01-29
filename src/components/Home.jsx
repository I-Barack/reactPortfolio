import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';


const Home = () => {
  const [viewWork, setviewWork] = useState(false);
  const handleClick = () => setviewWork(!viewWork);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 md:px-16 flex flex-col justify-center h-full'>
            <p className='text-[#98313C]'>Hi, my name is</p>  
            <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6]'>Barack</h1>
            <h2 className='text-4xl md:text-7xl font-bold text-[#8892b0]'>Full Stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
              I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional experiences. Currently, I'm focused on building responsive full-stack web application.
            </p>
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2  border-[#98313c] hover:bg-[#98313c]'>
                  <Link className="flex items-center" onClick={handleClick} to="work" smooth={true} duration={700}>
                    View work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-4'/> 
                    </span>
                  </Link>
                </button>
            </div>
        </div>
    </div>

  )
}

export default Home


