import Content from "../component/Content"
import DefineItem from "../component/DefinItem"
// import Map from "../component/Objects"
function Home(props) {
  const { words, getWord } = props
  return (
    <>
      <DefineItem getWord={getWord} words={words} />
      <Content words={words}/>
     </>
  )
}

export default Home
