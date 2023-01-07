import { Box } from '@chakra-ui/react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Nav from './components/nav'
import SharedComponent from "./components/SharedComponent"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import Landlord from "./pages/Landlord"
import Tenants from "./pages/Tenants"
import AboutUs from './components/AboutUs'


function App() {
  return (
  <Box>
    <Home />
    <AboutUs />
    <Landlord />
    <Tenants />
    <ContactUs />
  </Box>
  )
}

export default App
