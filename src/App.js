import axios from "axios"
import { useState } from "react"
import DefineItem from "./component/DefinItem"
import Navbar from "./component/Navbar"

function App() {
  const [words, setWords] = useState([])

  const getWord = e => {
    e.preventDefault()
    const form = e.target
    const word = form.elements.word.value

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => {
        console.log(response.data)

        setWords(response.data)
      })
      .catch(error => {
        console.log(error?.response?.data)
      })
  }
console.log(words)
  return (
    <>
      <Navbar />
      <DefineItem getWord={getWord} words={words} />
      {words.map(wordObject => (
        <>
          <h1>{wordObject.word}</h1>,<p>{wordObject.origin}</p>
          {wordObject.phonetics.map(phon => (
            <>
              <p>{phon.text}</p>
              <audio controls src={`https:${phon.audio}`}></audio>
            </>
          ))}
          
          <>
          {wordObject.meanings.map( means => (
            <p> {means.partOfSpeech} </p>
            )),
            {wordObject.means.definitions.map(def => (
              <p> {def.definition} </p> 
              ))}}
              </>
              
          
          
        </>
      ))}
    </>
  )
}

export default App
