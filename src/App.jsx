import { useEffect, useState } from "react"
import Header from "./components/Header"
import SearchFilter from "./components/SearchFilter"
import CountryCard from "./components/CountryCard"

function App() {

  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCountries(data))
  })

  return (
    <div className="max-w-7xl mx-auto">  
      <Header />
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
