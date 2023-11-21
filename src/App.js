import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import About from "./components/About";
import Services from "./components/Services";
import SecondCarousel from "./components/SecondCarousel";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import FormBox from "./components/FormBox";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" >
      <div>
      <header className="position-relative">
        <MyNavbar/>
      </header>
      <main>
        <MyCarousel />
        <About />
        <Services/>
        <SecondCarousel/>
        <Team/>
        <Testimonial/>
        <FormBox/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
    </div>
  );
}

export default App;
