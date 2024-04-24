import type { MenuItem, OrderItem } from "../types";

//NOTE - actions
export type OrderAction =
  | { type: "add-item"; payload: { newItem: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip" , payload:{value:number}};

//NOTE - state
export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

//NOTE - reducer

export function orderReducer(
  state: OrderState = initialState,
  action: OrderAction
) {
  if (action.type === "add-item") {

    let updatedOrder:OrderItem[]=[]
    const itemExist = state.order.find((e) => e.id === action.payload.newItem.id);
    if (itemExist) {
      updatedOrder = state.order.map((e) =>
        e.id == action.payload.newItem.id ? { ...e, quantity: e.quantity + 1 } : e
      );
    } else {
      const newItem: OrderItem = { ...action.payload.newItem, quantity: 1 };
      updatedOrder = [...state.order, newItem]
    }

    return {
      ...state,
      order: updatedOrder
    };
  }

  if (action.type === "remove-item") {
    const updatedOrder = state.order.filter(e=>e.id!==action.payload.id);
    return {
      ...state,
      order: updatedOrder
    };
  }

  if (action.type === "place-order") {

    return {
      ...state,
      order:[],
      tip:0
    };
  }

  if (action.type === "add-tip") {

    return {
      ...state,
      tip:action.payload.value
    };
  }
  return state;
}
