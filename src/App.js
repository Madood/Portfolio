import './Styles/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Service from './Components/Service/Service';
import Projects from './Components/Projects/Projects';
import Qualification from './Components/qualification/Qualification';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
import Scrollup from './Components/ScrollUp/Scrollup';


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Service />
          <Qualification />
          <Projects />
          <Testimonial />
          <Contact />
          <Footer />
          <Scrollup />
        </main>
      </>
    </div>
  );
}

export default App;
