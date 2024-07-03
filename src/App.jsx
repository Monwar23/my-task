import Banner from "./components/Banner"
import ComprehensiveCareUnit from "./components/ComprehensiveCareUnit"
import EmpoweringHealth from "./components/EmpoweringHealth"
import Navbar from "./components/Navbar"
import Testomonial from "./components/Testomonial"
import WhoWeAre from "./components/WhoWeAre"

function App() {

  return (
  <div className="max-w-6xl mx-auto bg-[#FBFBFB]">
    <Navbar></Navbar>
    <Banner></Banner>
    <ComprehensiveCareUnit></ComprehensiveCareUnit>
    <WhoWeAre></WhoWeAre>
    <EmpoweringHealth></EmpoweringHealth>
  <Testomonial></Testomonial>
  </div>
    
  )
}

export default App
