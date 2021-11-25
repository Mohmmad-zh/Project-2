import { Accordion } from "react-bootstrap"
function Meanings(props) {
  const { means } = props
  //__________Part of Speech like as A Noun , Verb, and Adjective_____________
  return (
    <>
      <Accordion.Header>
        <strong style={{color:"royalblue"}}> Part of Speech {means.partOfSpeech} </strong>
      </Accordion.Header>
    </>
  )
}

export default Meanings
