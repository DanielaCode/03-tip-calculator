import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  function addItem(item:MenuItem){
    //check if the item exist in the state
    const itemExist = order.find(e=>e.id===item.id);
    if (itemExist) {
        const updatedOrder = order.map(e=>e.id==item.id?{...e,quantity:e.quantity+1}:e);
        setOrder(updatedOrder);
    } else {
        //casting an MenuItem to OrderItem
        const newItem:OrderItem = {...item,quantity:1}
        setOrder([...order, newItem]);
    }
   
  }

  return {
    addItem
  };
}

export default useOrder;
