import { Suspense } from "react"
import { About } from "./cmps/About/About"
import { Contact } from "./cmps/Contact/Contact"
import { Experience } from "./cmps/Experience/Experience"
import { Footer } from "./cmps/Footer/Footer"
import { Header } from "./cmps/Header/Header"
import { Recommends } from "./cmps/Recommends/Recommends"
import { Skills } from "./cmps/Skills/Skills"


function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Recommends />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
