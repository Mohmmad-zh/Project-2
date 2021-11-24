function Definitions(props) {
  const { def } = props
  return (
    <>
      <h6> Definition: {def.definition} </h6>
      <br />
      <p> Example: {def.example} </p>
    </>
  )
}

export default Definitions
