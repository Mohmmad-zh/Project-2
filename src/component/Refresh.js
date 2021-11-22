function refresh() {
  
    window.location.reload()
  

  return (
    <div>
      <h1>{Math.random()}</h1>
      <button onClick={refresh}>Refresh</button>
    </div>
  )
}

export default refresh
