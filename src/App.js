import Header from './components/Header';
import Footer from './components/Footer';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import './App.css';
import { useState } from 'react';
import Resume from './Resume';

function App() {
  const [page, setPage] = useState('')

  function showPage() {
    if (page === 'portfolio') {
      return <Portfolio />
    } else if (page === 'contact') {
      return <Contact />
    } else if (page === 'resume') {
      return <Resume />
    } else {
      return <About />
    }
  }
  return (
    <div className="App">
      <Header page={page} setPage={setPage}/>
      <main>
        {showPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
