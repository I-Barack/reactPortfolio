import React from 'react'
import WorkImg from '../assets/photo5.jpg'
import PageImg from '../assets/photo2.jpg'
import ProjectImg from '../assets/photo4.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300 flex justify-center items-center'>
      <div className='max-w-[1000px] mx-auto py-4 px-8 md:px-16 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-[#98313c] '>Work</p>
          <p className='py-6'>// Check out sme of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 md:gap-4'>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                React JS Application
              </div>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${PageImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                TailwindCSS UI/UX
              </div>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Grid item */}
          <div style={{backgroundImage: `url(${ProjectImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                Node Js Application
              </div>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${ProjectImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                AV Eatry Application
              </div>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${WorkImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                Travel Web Application
              </div>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item */}
          <div style={{backgroundImage: `url(${PageImg})`}} 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-300'>

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                Css Design
              </div>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work