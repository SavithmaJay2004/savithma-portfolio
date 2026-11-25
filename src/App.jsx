import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import MyWork from './Components/MyWork'
import Footer from './Components/Footer'
import Experience from './Components/Experience'
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MyWork />
          <Experience />


      </main>
      <Footer />
    </>
  )
}
