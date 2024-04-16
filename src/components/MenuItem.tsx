import { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}
function MenuItems({item}:MenuItemProps) {
  return (
    <button className="flex justify-between p-4 border-sky-400 border-2 w-full rounded-md hover:bg-sky-400">
        <p className="">{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItems