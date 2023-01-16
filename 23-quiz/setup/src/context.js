import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl ='https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [waiting,setWaiting] = useState(true);
  const [loading,setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);
  const [index,setIndex] = useState(0);
  const [correct,setCorrect] = useState(0);
  const [error,setError] = useState(false);

  const [isModalOpen,setIsModalOpen] = useState(false)

const fetchQuestion =  async(url) =>{
  setLoading(true)
  setWaiting(false)
  const response = await axios(url).catch(err => console.log(err))
  if(response){
    const data = response.data.results
    if(data.length > 0){
      setQuestions(data)
      setWaiting(false)
      setLoading(false)
      setError(false)
    }
    else{
      setWaiting(true)
      setError(true)
    }
    
  }
  else{
    setWaiting(true)
  }
}

const nextQuestion =()  => {
  setIndex((oldIndex)=>{
    const index = oldIndex + 1
    if (index > questions.length -1) {
      //openModal()
      return 0
    }
    else{

      return index
    }
  })
}

const checkAnswer = value =>{

  if (value) {
    setCorrect((oldstate)=> oldstate + 1)
  }
  nextQuestion()
}
useEffect(()=>{
  fetchQuestion(tempUrl)
},[])

  return <AppContext.Provider value={{waiting,loading,questions,index,correct,error,isModalOpen,nextQuestion,checkAnswer}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
