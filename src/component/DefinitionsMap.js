function Definitions(props) {
  const { def } = props
  return (
    <>
  //______Definitions and Examples Conditions to not Show the Empty Fields______
    <div>
    {def.definition !== undefined ? (
      <h6 style={{color:"darkmagenta"}}> Definition: {def.definition} </h6>
    ) : (null)}
    </div>
      <br />
      <div>
    {def.example !== undefined ? (
      <p> Example: {def.example} </p>
      ) : (null)}
      </div>
      </>
  )
}

export default Definitions
