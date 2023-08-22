import Header from './components/Header';
import Footer from './components/Footer';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import './App.css'; 

function App() {
  return (
    <div className="App">
     <Header />
     <main>
      <h2><About /></h2>
      <p>I am Daniel Roh</p>
      <h2><Contact /></h2>
      <h2><Portfolio /></h2>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
