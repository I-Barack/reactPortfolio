import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {HiArrowNarrowRight} from 'react-icons/hi';


const Home = () => {
  const [viewWork, setviewWork] = useState(false);
  const handleClick = () => setviewWork(!viewWork);

  return (
    <div name='home' className='w-full h-screen bg-slate-100/60'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 md:px-16 flex flex-col justify-center h-full'>
        <h1 className='text-4xl md:text-7xl font-bold text-black'>Barack</h1>
        <h2 className='text-4xl md:text-7xl font-bold text-black/30'>Full Stack developer.</h2>
        <p className='text-black py-4 max-w-[700px]'>
        Dynamic JavaScript, Node.js, and React Developer with a proven track record at Early Code, where I honed my problem-solving, collaboration and HTML5/CSS3 expertise. Excelled in building strong relationships and leveraging creativity for innovative solutions. Achieved significant project success through exceptional teamwork and collaboration.
        </p>
        <div>
            <button className='group text-[#98313C] border-2 px-6 py-3 my-2  border-[#0a192f] hover:bg-[#0a192f]'>
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


