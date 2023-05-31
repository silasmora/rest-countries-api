import { useEffect, useState } from "react"
import Header from "./components/Header"
import SearchFilter from "./components/SearchFilter"
import CountryCard from "./components/CountryCard"
import { Route, Routes, useLocation } from "react-router-dom"
import SingleCountryCard from "./components/SingleCountryCard"

function App() {

  const [theme, setTheme] = useState('light')
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState(null)
  useState([])
  
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  function handleThemeToggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  function handleRegionChange(region) {
    setSelectedRegion(region);
  }

  const filteredAndSearchCountries = countries.filter(country => {
    return (
      (selectedRegion === null || selectedRegion === 'Filter by Region' || country.region === selectedRegion) && 
      country.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  const location = useLocation()
  const { pathname } = location
  const showSearchFilter = !pathname.startsWith('/countries/')

  return (
    <div className="max-w-7xl mx-auto">  
      <Header toggle={handleThemeToggle}/>
      <div className="lg:shadow-md">

        {showSearchFilter && <SearchFilter 
          search={search} 
          setSearch={setSearch} 
          selectedRegion={selectedRegion} 
          setSelectedRegion={setSelectedRegion} 
          handleRegionChange={handleRegionChange}
          />}

        <div className="px-12">
          <Routes>

            <Route exact path='/countries' 
              element={<CountryCard filteredAndSearchCountries={filteredAndSearchCountries}/> }>
            </Route>

            <Route path='/countries/:name' element={<SingleCountryCard countries={countries}/>} />
            
            
          </Routes>
        </div>

      </div>
      
    </div>
  )
}

export default App
