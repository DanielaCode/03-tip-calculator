import { useMemo } from "react"
import type { OrderItem } from "../types"

type OrderTotalsProps={
    order:OrderItem[]
}

function OrderTotals({order}:OrderTotalsProps) {
    const totalOrer = useMemo(()=>order.reduce((total,e)=>total+(e.price*e.quantity),0),[order]);
    
  return (
    <>
        <h3 className="font-black text-2xl">Totales y Propina</h3>
        <div className="my-4">
            <p>Subtotal a pagar: <span className="font-black">${totalOrer}</span></p>
            <p>Propina: <span className="font-black">$10</span></p>
            <p>Total a pagar: <span className="font-black">$10</span></p>
        </div>
    </>
  )
}

export default OrderTotals