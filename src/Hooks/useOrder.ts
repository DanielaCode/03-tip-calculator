import { useState } from "react";
import type { OrderItem } from "../types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  return {};
}

export default useOrder;
