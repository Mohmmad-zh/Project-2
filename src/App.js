import axios from "axios"
import { useState } from "react"
import DefineItem from "./component/DefinItem"
import Navbar from "./component/Navbar"

function App() {
  
  const [words, setWord] = useState(null)
  

  const getWord = ( e ) => {
      e.preventDefault()
      const form = e.target
      const word =  form.elements.word.value
      
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => {
        console.log(response.data)
        setWord(response.data)
    }).catch(error =>{
      console.log(error.response.data)
    }) 
  }
  
  {words.forEach(wordObject => {
    <h1>{wordObject.word.meanings}</h1>
  

  })
}
  return (
    <>
     <Navbar/>
      <DefineItem getWord={getWord} />

     
    </>
  )
}

export default App
