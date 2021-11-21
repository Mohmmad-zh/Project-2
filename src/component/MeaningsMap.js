import { Accordion } from "react-bootstrap"
function Meanings(props) {
  const { means } = props
  return (
    <>
      <Accordion.Header>
        <strong> Part of Speech {means.partOfSpeech} </strong>
      </Accordion.Header>
      <br />
    </>
  )
}

export default Meanings
