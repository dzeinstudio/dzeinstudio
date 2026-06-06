import Nav from './components/Nav';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
