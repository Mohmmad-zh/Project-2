import axios from "axios"
import {  useState , useEffect } from "react"
import DefineItem from "./component/DefinItem"
import Navbar from "./component/Navbar"
import { Route, Routes, useNavigate } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Profile from "./pages/Profile"




function App() {
  const [words, setWords] = useState([])
  const Navigate = useNavigate()
  const [errorSignUp, setErrorSignUp] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const [profile , setProfile] = useState(null)

  useEffect (()=> {
   
    getProfile()
  }, [])
  const getProfile = () => {
   
    axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me" , {
      headers : {
        Authorization : localStorage.UserToken,
      } , 
    })
    .then(response => {
     const profileData=response.data
     console.log(profileData)
     setProfile(profileData)
    }).catch(error =>{
      console.log(error.response.data)
    })
  }

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
    axios
      .post("https://vast-chamber-06347.herokuapp.com/api/user", body, {
        headers: {
          Authorization: localStorage.UserToken,
        },
      })
      .then(response => {
        console.log(response.data)
        setErrorSignUp(null)
        Navigate("/login")
      })
      .catch(error => {
        setErrorSignUp(error.response.data)
      })
  }

  const login = e => {
    e.preventDefault()
   
    const form = e.target

    const userBody = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    axios
      .post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody, {
        headres: {
          Authorization: localStorage.UserToken,
        },
      })
      .then(response => {
        const UserToken = response.data
        localStorage.UserToken = UserToken
        Navigate("/")
        setErrorLogin(null)
     
      })
      .catch(error => {
        setErrorLogin(error.response.data)
      })
  }

  const logout = () => {
    localStorage.removeItem("UserToken")
    
    Navigate("/")
  }
  function refreshPage(){ 
    window.location.reload(); 
}
  
  return (
    <>
      <Navbar logout={logout} />

      <Routes>
        <Route path="/signup" element={<SignUp signUp={signUp} /* login={login} */ errorSignUp={errorSignUp} />} />
        <Route path="/login" element={<Login login={login} errorLogin={errorLogin} />} />
        <Route path="/" element={<Home DefineItem={DefineItem} getWord={getWord} words={words}/>} />
        <Route path="/profile" element={<Profile  profile={profile} refreshPage={refreshPage} />} />
      </Routes>
     
    </>
  )
}

export default App
