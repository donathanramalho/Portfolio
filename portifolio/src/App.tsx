import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="pt-20 px-4 max-w-7xl mx-auto">
        
        <div className="h-[200vh] mt-10">
          <h1 className="text-4xl font-bold">Conteúdo do Portfólio vai aqui...</h1>
          <p className="mt-4 text-gray-400">Role a página para ver o Header fixo no topo!</p>
        </div>

      </main>
    </div>
  );
}

export default App;