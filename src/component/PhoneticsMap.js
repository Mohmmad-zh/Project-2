function Phonetics(props) {
  const { phon } = props
  return (
    <>
      <p> Phonetics {phon.text}</p>
      <audio controls src={`https:${phon.audio}`}></audio>
    </>
  )
}

export default Phonetics
