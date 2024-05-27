import React from 'react'

const Blogcart = ({img,desc}) => {
  return (
    <div className=' hover:shadow-2xl cursor-pointer'>
        
    <div>
      <img className='w-full' src={img} alt="" />
    </div>
    <div className='px-6 py-8 bg-white'>
      <div className=' flex justify-between items-center
       text-gray-500'>
        <p>By: admin</p>
        <p>15 June 2024</p>
      </div>
      {desc}

    </div>
      
    </div>
  )
}

export default Blogcart
