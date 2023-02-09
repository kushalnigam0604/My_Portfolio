import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import InspiringQuotes from './Components/InspiringQuotes/InspiringQuotes';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <InspiringQuotes/>
      <Contact/>
    </>
  );
}

export default App;
