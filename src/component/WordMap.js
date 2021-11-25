import { useEffect, useState } from "react"
import styles from "../pages/WordMap.module.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
function Map(props) {
  const capitalize = (str) => {
    if(typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    } else {
        return '';
    }
};
  const { wordObject, addFavourite, deleteFavourite } = props
  const [show, setShow] = useState(false)
  const handleChange = () => {
    console.log("fff")
    setShow(!show)
  }
  useEffect(() => {
    setShow(false)
  }, [wordObject])

  return (
    <div>
      <h1>{capitalize(wordObject.word)}
      {show ? (
        <AiFillHeart
        className={styles.heart} style={{color:"red"}} title={localStorage.UserToken === undefined ?( "Sign in to use favourite"):("Added to favourite")}
        onClick={() => {
          handleChange()
          deleteFavourite()
        }}
        />
        ) : (
        
            <AiOutlineHeart title={localStorage.UserToken === undefined ?( "Sign in to use favourite"):("Not in favourite")}
            className={styles.heart}
            onClick={() => {
              handleChange()
              addFavourite(wordObject.word)
            }}
            />
        )}
        </h1>
        <hr/>
        <br />
      <p style={{ textAlign: "center", color:"red" }}>{wordObject.origin}</p>
    </div>
  )
}
export default Map
