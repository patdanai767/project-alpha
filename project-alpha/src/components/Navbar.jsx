import React from 'react'

function navbar() {
  return (
    <nav className='bg-blue-500 p-4 '>
      <div className='containar mx-auto flex justify-between items-center'>
        <ul className='flex space-x-20'>
          <li><a href="#" className='text-white text-xl hover:text-gray-700'>Home</a></li>
          <li><a href="#" className='text-white text-xl hover:text-gray-700'>Find a Trainer</a></li>
          <li><a href="#" className='text-white text-xl hover:text-gray-700'>Chat</a></li>
          <li><a href="#" className='text-white text-xl hover:text-gray-700'>Calendar</a></li>
        </ul>
        <div>
        <a href="#" className='text-white text-2xl font-semibold hover:text-gray-700'>projectA</a>
        </div>
      </div>
    </nav>
   
    
    
    
  )
}

export default navbar