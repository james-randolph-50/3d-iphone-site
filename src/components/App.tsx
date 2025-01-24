import "../index.css"
import Hero from "./Hero"
import NavBar from "./NavBar"
import Highlights from "./Highlights"
import Model from "./Model"


const App = () => {
  return (
    <main className="bg-black">
     <NavBar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
