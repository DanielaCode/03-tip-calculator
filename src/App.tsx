import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipForm from "./components/TipForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer,initialState)
  return (
    <>
      <header className="bg-sky-400 py-5">
        <h1 className="text-center text-3xl font-black">
          Calculadora de precios
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="px-5">
          <h2 className="text-3xl font-black py-4">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((e) => (
              <MenuItem key={e.id} item={e} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border-dashed border-2 border-sky-400 px-5 rounded-md space-y-10">
          <h2 className="text-3xl font-black py-4">Consumos</h2>
          {state.order.length > 0 ? (
            <>
              <OrderContent state={state} dispatch={dispatch} />
              <TipForm dispatch={dispatch}/>
              <OrderTotals state={state} dispatch={dispatch}/>
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
