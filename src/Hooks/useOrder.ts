import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  function addItem(item:MenuItem){
    console.log(item)
  }

  return {
    addItem
  };
}

export default useOrder;
