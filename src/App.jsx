import { Element } from "react-scroll";
import NavBar from "./component/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import SignUp from "./pages/SignUp";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Element name="home" className="element">
        <HomePage />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="pricing" className="element">
        <Pricing />
      </Element>
      <Element name="signup" className="element">
        <SignUp />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
