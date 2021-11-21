function Map(props) {
  const { wordObject } = props
  return (
    <div>
      <h1>{wordObject.word}</h1>
      <p style={{ textAlign: "center" }}>{wordObject.origin}</p>
    </div>
  )
}
export default Map
