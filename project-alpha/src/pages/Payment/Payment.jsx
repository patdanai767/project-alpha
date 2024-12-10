import React , { useState }from 'react'
import Modal from '../../Modal'

const Payment = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div class='flex items-center justify-center min-h-screen bg-cyan-600'>
        
        <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
       
        <div>
            <button onClick={() => setIsOpen(true)} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">pay</button>
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        
        </Modal>
        </div>
    </div>
    </div>
            
    </div>
    
   
  )
}

export default Payment
