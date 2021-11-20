function Home(props) {
    const {words} = props
    return ( <><DefineItem getWord={getWord} words={words} /></> );
}

export default Home;