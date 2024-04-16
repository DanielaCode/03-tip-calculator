import MenuItem from "./components/MenuItem";
import {menuItems} from "./data/db";

function App() {
  return (
    <>
      <header className="bg-sky-400 py-5">
        <h1 className="text-center text-3xl font-black">Calculadora de precios</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="px-5">
          <h2 className="text-3xl font-black py-4">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((e)=><MenuItem key={e.id} item={e}/>)} 
          </div>
        </div>
        <div className="px-5">
          <h2 className="text-3xl font-black py-4">Consumos</h2>
        </div>
      </main>
    </>
  );
}

export default App;
