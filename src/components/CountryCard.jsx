import React from 'react'
import { Link } from 'react-router-dom';

export default function CountryCard({ filteredAndSearchCountries }) {

  return (
    <div className='mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 lg:gap-10 text-sm'>
      {filteredAndSearchCountries.map(country => (
        <div key={country.name} className='shadow-lg bg-white rounded-md dark:bg-darkElements dark:text-darkModeText md:h-max xl:h-full'>
          <div className='h-1/2'>
            <Link to={`/${country.name}`}>
              <img className='h-full w-full cursor-pointer rounded-t-md' src={country.flags.png} alt="country flag" />
            </Link>
          </div>
          <div className='p-6 border-t border-gray-100'>

            <Link to={`/${country.name}`}>
              <h1 className='pb-4 text-xl font-bolder hover:text-red-600'>{country.name}</h1>
            </Link>

            <p><span className='font-bold'>Population: </span>{country.population.toLocaleString()}</p>
            <p className='py-1'><span className='font-bold'>Region: </span>{country.region}</p>
            <p className='font-light'><span className='font-bold'>Capital: </span>{country.capital}</p>

          </div>
        </div>
        
      ))}
    </div>
  );
}
