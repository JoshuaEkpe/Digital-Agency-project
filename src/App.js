import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Intro from  "./components/Intro/Intro";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Card from "./components/Card/Card";
import Project from "./components/Projets/Project";
import Deals from "./components/Deals/Deals";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <Hero />
      <Services />
      <Card />
      <Project />
      <Deals />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
