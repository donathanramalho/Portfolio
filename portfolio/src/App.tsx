import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-blue-500/30">
      
      <Header />
      
      <main className="pt-16">
        <Hero />
        <About />
        <div className="h-[50vh]"></div>
      </main>

    </div>
  );
}

export default App;
