import React from 'react'

export default function CountryCard({ countries, filteredCountry, search }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-10 md:gap-4 lg:gap-10 text-sm'>
      {search.length > 0 ? (
        filteredCountry.map(country => (
          <div key={country.name} className='shadow-lg bg-white rounded-md dark:bg-darkElements dark:text-darkModeText'>
            <div className='h-1/2'>
              <img className='h-full w-full rounded-t-md' src={country.flags.png} alt="country flag" />
            </div>
            <div className='p-6 border-t border-gray-100'>
              <h1 className='pb-4 text-xl font-bolder'>{country.name}</h1>
              <p><span className='font-bold'>Population: </span>{country.population.toLocaleString()}</p>
              <p className='py-1'><span className='font-bold'>Region: </span>{country.region}</p>
              <p className='font-light'><span className='font-bold'>Capital: </span>{country.capital}</p>
            </div>
          </div>
        ))
      ) : (
        countries.map(country => (
          <div key={country.name} className='shadow-lg bg-white rounded-md dark:bg-darkElements dark:text-darkModeText'>
            <div className='h-1/2'>
              <img className='h-full w-full rounded-t-md' src={country.flags.png} alt="country flag" />
            </div>
            <div className='p-6 border-t border-gray-100'>
              <h1 className='pb-4 text-xl font-bolder'>{country.name}</h1>
              <p><span className='font-bold'>Population: </span>{country.population.toLocaleString()}</p>
              <p className='py-1'><span className='font-bold'>Region: </span>{country.region}</p>
              <p className='font-light'><span className='font-bold'>Capital: </span>{country.capital}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
