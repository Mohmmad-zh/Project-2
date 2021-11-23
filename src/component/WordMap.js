import { Button } from "react-bootstrap"

function Map(props) {
  const { wordObject ,addFavourite } = props
  return (
    <div>
      <h1>{wordObject.word}  <Button onClick={() => addFavourite(wordObject.word)} >Add favourite</Button></h1>  
     
      <p style={{ textAlign: "center" }}>{wordObject.origin}</p>
    </div>
  )
}
export default Map
