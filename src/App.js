import axios from "axios"
import { useState } from "react"
import DefineItem from "./component/DefinItem"
import Navbar from "./component/Navbar"
import { Route, Routes, useNavigate } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import WordMap from "./component/WordMap"
import Antonyms from "./component/AntonymsMap"
import Synonyms from "./component/SynonymsMap"
import Meanings from "./component/MeaningsMap"
import Phonetics from "./component/PhoneticsMap"
import Definitions from "./component/DefinitionsMap"
import { Accordion, Row, Col, Card } from "react-bootstrap"

// import Map from "./component/Objects"

function App() {
  const [words, setWords] = useState([])
  const Navigate = useNavigate()
  const [errorSignUp, setErrorSignUp] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)

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
  return (
    <>
      <Navbar logout={logout} />

      <Routes>
        <Route path="/signup" element={<SignUp signUp={signUp} /* login={login} */ errorSignUp={errorSignUp} />} />
        <Route path="/login" element={<Login login={login} errorLogin={errorLogin} />} />
        <Route path="/" element={<Home DefineItem={DefineItem} getWord={getWord} />} />
      </Routes>
      <>
        <Row>
          <Col md={6} className="mx-auto">
            {words.map(wordObject => (
              <>
                <Card style={{ width: "45rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <WordMap wordObject={wordObject} />
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                      {wordObject.phonetics.map(phon => (
                        <Phonetics wordObject={wordObject} phon={phon} />
                      ))}
                    </Card.Subtitle>
                    {wordObject.meanings.map(means => (
                      <>
                        <Card.Text>
                          <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                              <Meanings wordObject={wordObject} means={means} />
                              <Accordion.Body>
                                {means.definitions.map(def => (
                                  <>
                                    <Definitions means={means} def={def} />

                                    <Accordion defaultActiveKey="1">
                                      {def.synonyms.length > 0 ? (
                                        <Accordion.Item eventKey="0">
                                          <Accordion.Header>
                                            <b> Synonyms</b>
                                          </Accordion.Header>
                                          <Accordion.Body>
                                            <ul>
                                              {def.synonyms.map(syn => (
                                                <Synonyms def={def} syn={syn} />
                                              ))}
                                            </ul>
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      ) : null}
                                    </Accordion>

                                    <Accordion defaultActiveKey="1">
                                      {def.antonyms.length > 0 ? (
                                        <Accordion.Item eventKey="0">
                                          <Accordion.Header>
                                            <b>Antonyms</b>
                                          </Accordion.Header>
                                          <Accordion.Body>
                                            <ul>
                                              {def.antonyms.map(anto => (
                                                <Antonyms def={def} anto={anto} />
                                              ))}
                                            </ul>
                                          </Accordion.Body>
                                        </Accordion.Item>
                                      ) : null}
                                    </Accordion>
                                  </>
                                ))}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Card.Text>
                      </>
                    ))}
                  </Card.Body>
                </Card>
              </>
            ))}
          </Col>
        </Row>
      </>
    </>
  )
}

export default App
