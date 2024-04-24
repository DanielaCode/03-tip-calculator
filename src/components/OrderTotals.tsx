import { useMemo } from "react"
import { OrderAction, OrderState } from "../reducers/order-reducer"

type OrderTotalsProps={
    state:OrderState
    dispatch: React.Dispatch<OrderAction>
}

function OrderTotals({state, dispatch}:OrderTotalsProps) {
    const totalOrder = useMemo(()=>state.order.reduce((total,e)=>total+(e.price*e.quantity),0),[state.order]);
    const totalProp = useMemo(()=>state.tip*totalOrder,[state]);
    const total = useMemo(()=>totalOrder+totalProp,[state]);
  return (
    <div>
        <h3 className="font-black text-2xl">Totales y Propina</h3>
        <div>
            <p>Subtotal a pagar: <span className="font-black">${totalOrder}</span></p>
            <p>Propina: <span className="font-black">${totalProp}</span></p>
            <p>Total a pagar: <span className="font-black">${total}</span></p>
        </div>
        <button 
            className="w-full bg-black text-white font-black p-4 mt-4 disabled:opacity-10"
            disabled = {total === 0}
            onClick={()=>dispatch({type:"place-order"})}
            >
            Guardar orden
        </button>
    </div>
  )
}

export default OrderTotals