import { Accordion } from "react-bootstrap"
function Meanings(props) {
  const { means } = props
  return (
    <>
      <Accordion.Header>
        <strong style={{color:"royalblue"}}> Part of Speech {means.partOfSpeech} </strong>
      </Accordion.Header>
    </>
  )
}

export default Meanings
