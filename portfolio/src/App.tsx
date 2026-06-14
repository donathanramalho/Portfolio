import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-blue-500/30">
      
      <Header />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;
