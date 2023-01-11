import { Box } from '@chakra-ui/react'
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
  <Box>
    <Home />
    <AboutUs />
    <Landlord />
    <Tenants />
    <ContactUs />
    <Testimony />
    <Footer />
  </Box>
  )
}

export default App
