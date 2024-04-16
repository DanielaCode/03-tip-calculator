import { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
function MenuItems({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="flex justify-between p-4 border-sky-400 border-2 w-full rounded-md hover:bg-sky-400"
      onClick={() => addItem(item)}
    >
      <p className="">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}

export default MenuItems;
