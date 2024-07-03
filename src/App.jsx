import Banner from "./components/Banner"
import ComprehensiveCareUnit from "./components/ComprehensiveCareUnit"
import Navbar from "./components/Navbar"
import WhoWeAre from "./components/WhoWeAre"

function App() {

  return (
  <div className="max-w-6xl mx-auto bg-[#FBFBFB]">
    <Navbar></Navbar>
    <Banner></Banner>
    <ComprehensiveCareUnit></ComprehensiveCareUnit>
    <WhoWeAre></WhoWeAre>
  </div>
    
  )
}

export default App
