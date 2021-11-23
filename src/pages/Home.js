import Content from "../component/Content"
import DefineItem from "../component/DefinItem"
import { Button } from "react-bootstrap"
function Home(props) {
  const { words, getWord, addFavourite } = props
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Dictionary</h1>
      <DefineItem getWord={getWord} words={words} />

      <Content words={words} addFavourite={addFavourite} />
    </>
  )
}

export default Home
