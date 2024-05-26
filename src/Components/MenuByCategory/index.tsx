import { MenuItemByCategory } from '../../types';
import MenuItemWrapper from '../MenuItemWrapper';

interface MenuByCategoryProps {
  menuItem: MenuItemByCategory;
}

const MenuByCategory = ({ menuItem }: MenuByCategoryProps) => {
  console.log(menuItem.menus);

  return (
    <>
      <div className="flex items-start justify-center">
        <p className="p-1 text-lg uppercase text-gray-500">{menuItem.category.name}</p>
      </div>
      {menuItem.menus.map((menu) => (
        <MenuItemWrapper key={menu.id} menu={menu} />
      ))}
    </>
  );
};

export default MenuByCategory;
