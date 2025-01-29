import React, { useState } from 'react'

import JsImg from '../assets/js.png';
import GitHubImg from '../assets/github.png';
import TailwindImg from '../assets/tailwindcss.png';
import CssImg from '../assets/css.png';
import NodeImg from '../assets/nodejs.png';
import ReactImg from '../assets/react.png';
import Skillcard from './Skillcard';


const Skills = () => {

  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      {/* Contaier */}
      <div className='max-w-[1000px] mx-auto px-8 md:px-16 p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#98313c]'>Skills</p>
          <p className='py-4'>// These are the technologies i've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <Skillcard Img={CssImg} Text='Css'/>
          <Skillcard Img={JsImg} Text='Javascript'/>
          <Skillcard Img={TailwindImg} Text='Tailwindcss'/>
          <Skillcard Img={GitHubImg} Text='GitHub'/>
          <Skillcard Img={ReactImg} Text='React'/>
          <Skillcard Img={NodeImg} Text='Nodejs'/>
        </div>
      </div>
    </div>
  )
}

export default Skills