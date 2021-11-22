import Content from "../component/Content"
import DefineItem from "../component/DefinItem"

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
