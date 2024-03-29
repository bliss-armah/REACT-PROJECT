 import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show:false,msg:''})
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  const fetchMovies =async (url) =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = response.json()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  },[query])


  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider } 