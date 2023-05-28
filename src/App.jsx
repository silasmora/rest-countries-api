import { useEffect, useState } from "react"
import Header from "./components/Header"
import SearchFilter from "./components/SearchFilter"
import CountryCard from "./components/CountryCard"

function App() {

  const [countries, setCountries] = useState([])
  const [theme, setTheme] = useState('light')
  const [selectedRegion, setSelectedRegion] = useState(null)
  
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCountries(data))
  })

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

  const [search, setSearch] = useState('')

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredCountry = filterCountriesByRegion(selectedRegion).filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });
  
  function filterCountriesByRegion(region) {
    if (region === '') {
      return countries
    } else {
      return countries.filter(country => country.region === region)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">  
      <Header toggle={handleThemeToggle}/>
      <div className="shadow-md">

        <SearchFilter search={search} handleSearch={handleSearch} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>

        <div className="px-12 md:px-12">
        <CountryCard countries={countries} filteredCountry={filteredCountry} search={search}/>
        </div>
      </div>
    </div>
  )
}

export default App
