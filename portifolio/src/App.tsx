import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <Hero />
        
        <div className="h-[100vh]"></div>
      </main>
    </div>
  );
}

export default App;