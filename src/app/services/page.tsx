import React from 'react'
import ServicePage from '@/components/ServicePage'
import { ServiceCardsPointer } from "@/components/ServiceCard";


const Services = () => {
  return (
    <div className='text-black min-h-screen space-y-10'>
      <ServicePage />
      <div className="pb-10">
        <ServiceCardsPointer />
      </div>
    </div>
  )
}

export default Services
