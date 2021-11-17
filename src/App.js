import axios from "axios"
// import { useState } from "react"
import DefineItem from "./component/DefinItem"

function App() {
  
  // const [word, setWord] = useState(null)
  
// {/* <select onChange={handleChange}> */}
  const getWord = ( e ) => {
      e.preventDefault()
      const form = e.target
      const word =  form.elements.word.value
      
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => {
        console.log(response.data)
        // setWord(response.data)
    }).catch(error =>{
      console.log(error.response.data)
    }) 
  }
  
  return (
    <>
      <DefineItem getWord={getWord} />
    </>
  )
}

export default App
