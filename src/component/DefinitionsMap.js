function Definitions(props) {
  const { def } = props
  return (
    <>
      <b> Definition: {def.definition} </b>
      <br />
      <p> Example: {def.example} </p>
    </>
  )
}

export default Definitions
