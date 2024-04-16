import type { OrderItem } from "../types"

type OrderContentProps={
    order:OrderItem[]
}
function OrderContent({order}:OrderContentProps) {
  return (
    <>
        {order.map(e=>(
            <div key={e.id} className="flex justify-between items-center my-4">
                <div>
                    <p>{e.name} - ${e.price}</p>
                    <p className="font-black">Cantidad: {e.quantity} - ${e.price * e.quantity}</p>
                </div>
                <button className="text-white font-black bg-red-500 h-8 w-8 rounded-full">x</button>
            </div>
        ))}
    </>
  )
}

export default OrderContent