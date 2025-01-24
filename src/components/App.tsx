import "../index.css"
import Hero from "./Hero"
import NavBar from "./NavBar"
import Highlights from "./Highlights"


const App = () => {
  return (
    <main className="bg-black">
     <NavBar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App
