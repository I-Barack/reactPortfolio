import React from 'react'

import JsImg from '../assets/js.png';
import GitHubImg from '../assets/github.png';
import TailwindImg from '../assets/tailwindcss.png';
import CssImg from '../assets/css.png';
import NodeImg from '../assets/nodejs.png';
import ReactImg from '../assets/react.png';


const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      {/* Contaier */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#98313c]'>Skills</p>
          <p className='py-4'>// These are the technologies i've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CssImg} alt="Css icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JsImg} alt="Css icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TailwindImg} alt="Css icon" />
            <p className='my-4'>Tailwindcss</p>
          </div>
          <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={NodeImg} alt="Css icon" />
            <p className='my-4'>NodeJs</p>
          </div>
          <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="Css icon" />
            <p className='my-4'>ReactJs</p>
          </div>
          <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHubImg} alt="Css icon" />
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills