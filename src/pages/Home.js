import Content from "../component/Content"
import DefineItem from "../component/DefinItem"
function Home(props) {
  const { words, getWord, addFavourite, deleteFavourite } = props
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize:"50px" , color:"black", opacity:"0.6" }}>DICTIONARY</h1>
      <h1 style={{ textAlign: "center", fontSize:"50px" , color:"blue", opacity:"0.6" }}>API</h1>
      <DefineItem getWord={getWord} words={words} />


      <Content words={words} addFavourite={addFavourite} deleteFavourite={deleteFavourite} />
    </>
  )
}

export default Home
