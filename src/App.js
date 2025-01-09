
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import Quote from './components/Quote';
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
     <Header/> 
     <Hero/>
     <About/>
     <Projects/>
     <Quote/>
     <Contact/>
     <Footer/>

     
    </div>
  );
}

export default App;
