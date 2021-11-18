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
          <h1>Word: {wordObject.word}</h1>,<p> Origin: {wordObject.origin}</p>
          {wordObject.phonetics.map(
            phon => ((<p> Phonetics {phon.text}</p>), (<audio controls src={`https:${phon.audio}`}></audio>))
          )}
          {wordObject.meanings.map(means => (
            <>
              <br />
              <strong> Part of Speech: {means.partOfSpeech} </strong>
              <br />
              {means.definitions.map(def => (
                <>
                  <b> Definition: {def.definition} </b>
                  <br />
                  <p> Example: {def.example} </p>
                  <br />
                  <b> Synonyms:</b>
                  {def.synonyms.map(syn => (
                    <>
                      <ul>
                        <li> {syn} </li>
                      </ul>
                    </>
                  ))}
                  <br />
                  <b> antonyms: </b>
                  <br />
                  {def.antonyms.map(anto => (
                    <>
                      <ul>
                        <li> {anto} </li>
                      </ul>
                    </>
                  ))}
                </>
              ))}
            </>
          ))}
        </>
      ))}
    </>
  )
}

export default App
