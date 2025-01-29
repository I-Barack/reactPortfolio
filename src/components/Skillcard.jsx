import React from 'react'

const Skillcard = (Props) => {
  return (
    <div className='shadow-lg shadow[040c16] hover:scale-110 duration-500'>
    	<img className='w-20 mx-auto' src={Props.Img} alt="Css icon" />
    	<p className='my-4'>{Props.Text}</p>
  	</div>
  )
}

export default Skillcard
