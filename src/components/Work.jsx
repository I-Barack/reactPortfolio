import React from 'react'
import ReactImg from '../assets/react.png'
import NodeImg from '../assets/nodejs.png'
import TailwingImg from '../assets/tailwindcss.png'
import CodeImg from '../assets/code-img.jpg'
import EatryImg from '../assets/eatry.svg'
import XImg from '../assets/X_logo.jpg'
import Workcard from './Workcard';



const cards = [
  {
    js: 'X Clone Application',
    img: XImg
  },
  {
    js: 'TailwindCSS UI/UX',
    img: TailwingImg
  },
  {
    js: 'Node JS Application',
    img: NodeImg
  },
  {
    js: 'AV Eatry Application',
    img: EatryImg
  },
  {
    js: 'Travel Site Application',
    img: CodeImg
  },
  {
    js: 'React JS Application',
    img: ReactImg
  }
]

const Work = () => {
  return (
    <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300 flex justify-center items-center md:pt-0 pt-20'>
      <div className='max-w-[1000px] mx-auto py-4 px-8 md:px-16 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-[#98313c]'>Works</p>
          <p className='py-6'>Here are some projects I recently worked on</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 md:gap-4'>
          {cards.map((item) => (
            <Workcard Img={item.img} work={item.js} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work