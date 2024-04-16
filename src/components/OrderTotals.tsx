import { useMemo } from "react"
import type { OrderItem } from "../types"

type OrderTotalsProps={
    order:OrderItem[]
    tip:number
    placeOrder:()=>void
}

function OrderTotals({order, tip, placeOrder}:OrderTotalsProps) {
    const totalOrder = useMemo(()=>order.reduce((total,e)=>total+(e.price*e.quantity),0),[order]);
    const totalProp = useMemo(()=>tip*totalOrder,[tip,order]);
    const total = useMemo(()=>totalOrder+totalProp,[order,tip]);
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
            onClick={placeOrder}
            >
            Guardar orden
        </button>
    </div>
  )
}

export default OrderTotals