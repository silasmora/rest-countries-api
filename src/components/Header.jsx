import React from 'react'
import moon from '/images/moon.png'

export default function Header() {
  return (
    <div className='flex justify-between py-12 px-6 shadow-md md:px-12' >
      <h1 className='text-lg font-bolder md:text-xl lg:text-2xl'>Where in the world?</h1>
      <div className='flex items-center'>
        <img className='h-4 w-4 mr-2' src={moon} alt="Dark Mode Icon" />
        <div className='font-bold'>Dark Mode</div>
      </div>
    </div>
  )
}
