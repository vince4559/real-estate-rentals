
import './App.css'
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Landlord from "./pages/Landlord"
import Tenants from "./pages/Tenants"
import AboutUs from './components/AboutUs'
import Testimony from './components/Testimony'
import Footer from './pages/Footer'


function App() {
  return (
  <>
    <Home />
    <AboutUs />
    <Landlord />
    <Tenants />
    <ContactUs />
    <Testimony />
    <Footer />
  </>
  )
}

export default App
