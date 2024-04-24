import { OrderAction } from "../reducers/order-reducer";
import { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: React.Dispatch<OrderAction>
};
function MenuItems({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className="flex justify-between p-4 border-sky-400 border-2 w-full rounded-md hover:bg-sky-400"
      onClick={() => dispatch({type:"add-item",payload:{newItem:item}})}
    >
      <p className="">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}

export default MenuItems;
