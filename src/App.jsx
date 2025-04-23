import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Career from './pages/Career'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import Features from './pages/Features'
import Hero from './pages/Hero'
import LifeAtSamarth from './pages/LifeAtSamarth'

function App() {

  return <>
    <Header />
    <Hero />
    <Features />
    <LifeAtSamarth />
    <FAQ />
    <Career/>
    <ContactUs/>
    <Footer/>
  </>
}

export default App
