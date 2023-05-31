import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function SingleCountryCard({ countries }) {

  const { name } = useParams()
  
  const country = countries.find(country => country.name === name)

  const navigate = useNavigate()

  const renderBorderCountries = () => {
    const borderCountryNames = country?.borders ? country?.borders.
      map((border) => {
        const borderCountry = countries?.find((c) => c.alpha3Code === border);
        return borderCountry ? borderCountry.name : null;
      })
      .filter((name) => name !== null) : null;

    return borderCountryNames
  };
  
  return (
    <div className='py-10'>
      <button onClick={() => navigate('/countries')} className='flex items-center py-2 px-6 ring-1 ring-inset ring-gray-300 rounded-md shadow-lg cursor-pointer hover:bg-gray-200 dark:bg-darkElements dark:ring-slate-900 dark:text-darkModeText dark:hover:bg-darkElements/50'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      <div className='md:flex dark:text-darkModeText'>
        <div className='py-14 md:w-4/6 lg:w-1/2'>
          <img className='h-[60%] w-full lg:h-full' src={country?.flags.png} alt="country flag" />
        </div>

        <div className='md:flex flex-col md:my-14 lg:my-24'>
          <h1 className='text-xl font-bolder md:mx-10  lg:mx-20'>{country?.name}</h1>

          <div className='md:flex'>
            <div className='py-8 md:mx-10  lg:mx-20 font-light'>
                <p>
                  <span className='font-bold'>Native Name: </span>{country?.nativeName}
                </p>
                
                <p className='py-2'>
                  <span className='font-bold'>Population: </span>{country?.population.toLocaleString()}
                </p>
                
                <p className=''>
                  <span className='font-bold'>Region: </span>{country?.region}
                </p>

                <p className='py-2'>
                  <span className='font-bold'>Sub Region: </span>{country?.subregion}
                </p>

                <p>
                  <span className='font-bold'>Capital: </span>{country?.capital}
                </p>
            </div>

            <div className='py-8 font-light'>
              <p className=''>
                <span className='font-bold'>Top Level Domain: </span>{country?.topLevelDomain}
              </p>

              <p className='py-2'>
                <span className='font-bold'>Currencies: </span>{country?.currencies[0].name}
              </p>

              <p>
                <span className='font-bold'>Languages: </span>{country?.languages.map(language => language.name).join(', ')}
              </p>
            </div>
          </div>

          <div className='md:mx-10 lg:mx-20'>
            <h3 className='font-bold py-4'>Border Countries:</h3>
            <ul>
              {renderBorderCountries()?.slice(0,3).map((name) => {
                return (
                  <li key={name} className='inline-block rounded-md shadow-lg py-2 px-4 mr-2 mb-2 dark:bg-darkElements dark:text-darkModeText'>
                    {name}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
