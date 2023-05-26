import React from 'react'

export default function CountryCard({ countries }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-10 md:gap-4 lg:gap-10'>
      {countries.map(country => (
        <div key={country.name} className='shadow-lg bg-white rounded-md h-max xl:h-full'>
          
          <div className='h-1/2'>
            <img className='h-full w-full rounded-t-md' src={country.flags.png} alt="country flag" />
          </div>

          <div className='py-4 px-6 border-t border-gray-100 h-'>
            <h1 className='pb-4 text-xl font-bolder'>{country.name}</h1>
            <p><span className='font-bold'>Population: </span>{country.population.toLocaleString()}</p>
            <p className='py-1'><span className='font-bold'>Region: </span>{country.region}</p>
            <p><span className='font-bold'>Capital: </span>{country.capital}</p>
          </div>

        </div>)
      )}
    </div>
  )
}
