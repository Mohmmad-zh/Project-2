function Phonetics(props) {
  const { phon } = props
  return (
    <>
    //___________________Phonetic texts and audios Conditions________________
     <div>
      {phon.text !== undefined ? (
      <p style={{color:"brown"}}> Phonetics {phon.text}</p>
      ):(null)}
      </div>
    <div>
      {phon.audio !== undefined ? (
      <audio controls src={`https:${phon.audio}`}></audio>
      ):(null)}
    </div>
    </>
  )
}

export default Phonetics
