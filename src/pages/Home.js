import DefineItem from "../component/DefinItem"
// import Map from "../component/Objects"
function Home(props) {
  const { words, getWord } = props
  return (
    <>
      <DefineItem getWord={getWord} words={words} />
    </>
  )
}

export default Home
