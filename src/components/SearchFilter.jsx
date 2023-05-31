import React from 'react'
import DropDown from './DropDown'


export default function SearchFilter({ 
  search, 
  setSearch, 
  selectedRegion, 
  setSelectedRegion,
  handleRegionChange }) {

  return (
    <div className='mx-6 py-8 md:flex md:justify-between items-center md:py-12 md:mx-12'>
      <div className='relative text-gray-400 pointer-events-auto md:w-[40%] '>
        <svg className='
          absolute
          bottom-1/2
          w-5
          mx-6
          translate-y-1/2
          fill-current
          dark:text-darkModeText
          '  
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" stroke='currentColor'/></svg>
        <input
          type="text" 
          placeholder='Search for a country...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 py-4 px-16 w-full bg-white placeholder-slate-500 focus:outline-none dark:bg-darkElements dark:ring-slate-900 dark:text-darkModeText dark:placeholder-darkModeText'
          />
      </div>
 
      <DropDown 
        selectedRegion={selectedRegion} 
        setSelectedRegion={setSelectedRegion} 
        handleRegionChange={handleRegionChange}/>
    </div>
  )
}
