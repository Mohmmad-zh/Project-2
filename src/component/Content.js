import WordMap from "./WordMap"
import Antonyms from "./AntonymsMap"
import Synonyms from "./SynonymsMap"
import Meanings from "./MeaningsMap"
import Phonetics from "./PhoneticsMap"
import Definitions from "./DefinitionsMap"
import { Accordion, Row, Col, Card } from "react-bootstrap"

function Content(props) {
  const { words, addFavourite, deleteFavourite } = props

  //_____________wordObject, Phonetics, Meanings, Definitions, Synonyms and Antonyms Maps\\___________
  return (
    <>
      <Row>
        <Col md={6} className="mx-auto">
          {words.map(wordObject => (
            <>
              <Card style={{ width: "45rem" }}>
                <Card.Body>
                  <Card.Title>
                    <WordMap wordObject={wordObject} addFavourite={addFavourite} deleteFavourite={deleteFavourite} />
                  </Card.Title>
                  <Card.Subtitle className="mb-2">
                    <br />
                    {wordObject.phonetics.map(phon => (
                      <Phonetics wordObject={wordObject} phon={phon} />
                    ))}
                    <br />
                    <br />
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
                                  <br />
                                  <Accordion defaultActiveKey="1">
                                    {def.synonyms.length > 0 ? (
                                      <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                          <b> Synonyms</b>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <br />
                                          <ul>
                                            {def.synonyms.map(syn => (
                                              <Synonyms def={def} syn={syn} />
                                            ))}
                                            <br />
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
                                    <br />
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
  )
}

export default Content
