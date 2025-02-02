import React from 'react';


const Workcard = (props) => {
  return (
          <div style={
            {
              backgroundImage: `url(${props.Img})`,
              objectFit: 'cover'
            }
          } 
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105f duration-300'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-1000 scale-105'>
              <div className='text-2xl font-bold text-center px-4 text-white tracking-wider'>
                {props.work}
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
  )
}

export default Workcard
