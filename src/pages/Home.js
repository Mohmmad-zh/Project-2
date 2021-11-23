import Content from "../component/Content"
import DefineItem from "../component/DefinItem"
import {Button} from "react-bootstrap"
function Home(props) {
  const { words, getWord,add,addFavourite } = props
  return (
    <>
      <DefineItem getWord={getWord} words={words} />
    
      <Content words={words} addFavourite={addFavourite}/>
     </>
  )
}

export default Home
