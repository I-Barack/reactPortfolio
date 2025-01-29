import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center px-8 md:px-16 w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#98313c]'>
                About
            </p>  
          </div>  
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Barack, nice to meet you. please take a look around.</p>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quasi, iure similique fugit ex fugiat delectus perferendis eveniet ipsa magnam voluptatem, tempora iste, facilis eaque ipsam recusandae eius dolor sit a nemo! Voluptatum tempore sunt minus consequatur alias saepe. Possimus, temporibus itaque. Quidem assumenda ex error perspiciatis quibusdam sapiente eveniet.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About