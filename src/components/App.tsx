import "../index.css"
import Hero from "./Hero"
import NavBar from "./NavBar"
import Highlights from "./Highlights"
import Model from "./Model"
import Features from "./Features"
import HowItWorks from "./HowItWorks"
import Footer from "./Footer"


const App = () => {
  return (
    <main className="bg-black">
     <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
