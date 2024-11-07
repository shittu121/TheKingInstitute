import React from 'react'
import { DotBackground } from './DotBackground'
import { ContactForm } from './ContactForm'

const ContactMe = () => {
  return (
    <div className='w-full flex justify-between'>
        <div className="bg-white w-[90%] mx-auto h-full lg:h-[40rem] shadow-lg">
          <div className="block lg:flex md:flex justify-between items-center py-10 w-full">
            <div className="space-y-5 px-6 w-full">
                <h1 className='text-black font-extrabold text-start px-4 lg:px-8'>Contact Us</h1>
                <p className='text-lg  px-4 lg:px-8'>feel free to contact us any time, we will get back to you as soon as we can!</p>
                <ContactForm />
            </div>
            <div className="w-full">
              <DotBackground />
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default ContactMe
