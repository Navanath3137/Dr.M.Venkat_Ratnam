import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <Hero />
      <About />
      <Research />
      <Awards />
      <Publications />
      <Footer />
    </div>
  );
}

export default App;
