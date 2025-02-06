import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-100/60 flex justify-center items-center p-4 pt-5'>

      {/* getform.io */}
      <form action="https://getform.io/f/271ce452-f20b-4aa1-a0b9-82e9fca2fbf9" method='POST' className='text-black flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#98313c] text-black '>Contact</p>
          <p className='text-black py-4'>Let's get in touch.</p>
        </div>
        <input className='bg-slate-300 p-2' type="text" placeholder='Name' name='name' />
        <input className='bg-slate-300 p-2 my-4' type="email" placeholder='Email' name='email' />
        <textarea className='bg-slate-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-black border-2 border-[#0a192f] px-4 py-3 hover:border-[#0a192f] hover:bg-[#0a192f] hover:text-white my-8 mx-auto flex items-center'>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact