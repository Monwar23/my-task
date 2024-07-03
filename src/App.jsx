import Banner from "./components/Banner"
import ComprehensiveCareUnit from "./components/ComprehensiveCareUnit"
import Discount from "./components/Discount"
import EmpoweringHealth from "./components/EmpoweringHealth"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Question from "./components/Question"
import Testomonial from "./components/Testomonial"
import WhoWeAre from "./components/WhoWeAre"

function App() {

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-[#FBFBFB]">
      <Navbar></Navbar>
      <Banner></Banner>
      <ComprehensiveCareUnit></ComprehensiveCareUnit>
      <WhoWeAre></WhoWeAre>
      <EmpoweringHealth></EmpoweringHealth>
      <Testomonial></Testomonial>
      <Question></Question>
      <Discount></Discount>
    </div>
    <Footer></Footer>
    </div>

  )
}

export default App
