import { OrderAction, OrderState } from "../reducers/order-reducer";

type OrderContentProps = {
  state:OrderState,
  dispatch: React.Dispatch<OrderAction>
};
function OrderContent({ state, dispatch }: OrderContentProps) {
  return (
    <div>
      {state.order.map((e) => (
        <div key={e.id} className="flex justify-between items-center my-4">
          <div>
            <p>
              {e.name} - ${e.price}
            </p>
            <p className="font-black">
              Cantidad: {e.quantity} - ${e.price * e.quantity}
            </p>
          </div>
          <button className="text-white font-black bg-red-500 h-8 w-8 rounded-full" onClick={()=>dispatch({type:"remove-item",payload:{id:e.id}})}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default OrderContent;
