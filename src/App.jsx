import { useEffect, useState } from "react"
import Header from "./components/Header"
import SearchFilter from "./components/SearchFilter"
import CountryCard from "./components/CountryCard"

function App() {

  const [countries, setCountries] = useState([])
  const [theme, setTheme] = useState('light')
  
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

  return (
    <div className="max-w-7xl mx-auto">  
      <Header toggle={handleThemeToggle}/>
      <div className="shadow-md">

        <SearchFilter />

        <div className="px-12 md:px-12">
        <CountryCard countries={countries}/>
        </div>
      </div>
    </div>
  )
}

export default App
