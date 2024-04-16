import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  function addItem(item:MenuItem){
    //casting an MenuItem to OrderItem
    const newItem:OrderItem = {...item,quantity:1}
    setOrder([...order, newItem]);
  }

  return {
    addItem
  };
}

export default useOrder;
