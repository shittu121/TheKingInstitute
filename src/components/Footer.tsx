import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4  bottom-0 top-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="flex flex-row md:flex-row justify-between items-center">
            <div className="text-white text-sm md:text-base">
              <p>&copy; {new Date().getFullYear()} The King Institute. All Rights Reserved. <span className=''>Designed and developed with passion for learning.</span> </p>
             
            </div>
            <div className="flex flex-col text-sm space-x-4 mt-4 md:mt-0 sm-hidden">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
    </footer>

  )
}

export default Footer
