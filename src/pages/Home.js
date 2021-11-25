import Content from "../component/Content"
import DefineItem from "../component/DefinItem"
import Footer from "../component/Footer"
function Home(props) {
  const { words, getWord, addFavourite, deleteFavourite } = props
  return (
    <> 
    <div style={{minHeight:"100vh"}}>

      <h1 style={{ textAlign: "center", fontSize:"50px" , color:"black", opacity:"0.6" }}>DICTIONARY</h1>
      <h1 style={{ textAlign: "center", fontSize:"50px" , color:"blue", opacity:"0.6" }}>API</h1>
      <DefineItem getWord={getWord} words={words} />


      <Content words={words} addFavourite={addFavourite} deleteFavourite={deleteFavourite} />

    </div>
    <br />
      <Footer/>
    </>
  )
}

export default Home
