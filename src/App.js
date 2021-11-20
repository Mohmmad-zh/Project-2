import axios from "axios"
import { useState } from "react"
import DefineItem from "./component/DefinItem"
import Navbar from "./component/Navbar"
import { Route, Routes, useNavigate} from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"


function App() {
  const [words, setWords] = useState([])
  const Navigate = useNavigate()
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

  const signUp = e => {
   
    e.preventDefault() 
    const form = e.target
    const body = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      // CoPassword: form.elements.CoPassword.value,
      photo: form.elements.photo.value,
    }
    axios.post("https://vast-chamber-06347.herokuapp.com/api/user", body,{
      headers: {
        Authorization: 
          localStorage.UserToken
        },
      
    }).then(response => {
    console.log(response.data)
    Navigate("/login")
    }).catch(error =>{

      console.log(error.response.data)
    })
  }

  const login = e =>{
    e.preventDefault()
    const form = e.target
    const userBody = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody, {
      headres: {
      Authorization: localStorage.UserToken
    },
  }).then(response => {
    const UserToken = response.data
    localStorage.UserToken=UserToken
    Navigate("/")
    }).catch(error => {
      console.log(error.response.data)
    })
  }

  const logout = () =>{
    localStorage.removeItem("UserToken")
  } 
  return (
    <>
      <Navbar />
      <DefineItem getWord={getWord} words={words} />
      <Routes>
        <Route path="/signup" element={<SignUp signUp={signUp} />}/>
        <Route path="/login" element={<Login login={login} />}/>
      </Routes>
    
         {words.map(wordObject => (
          <>
<h1>Word: {wordObject.word}</h1>,<p> Origin: {wordObject.origin}</p>
{wordObject.phonetics.map(
      phon => (<p> Phonetics {phon.text}</p>, <audio controls src={`https:${phon.audio}`}></audio>)
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
