import Content from "../component/Content"
import DefineItem from "../component/DefinItem"
function Home(props) {
  const { words, getWord, addFavourite, deleteFavourite } = props
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Dictionary</h1>
      <DefineItem getWord={getWord} words={words} />

      <Content words={words} addFavourite={addFavourite} deleteFavourite={deleteFavourite} />
    </>
  )
}

export default Home
