import { MenuItems } from '@/types';
import StarRating from '@/Components/StarRating';
interface MenuItemWrapperProps {
  menu: MenuItems;
}
type TagKeys = 'must_try' | 'our_special' | 'best_seller';

const tag: Record<TagKeys, string> = {
  must_try: 'Must Try',
  our_special: 'Our Special',
  best_seller: 'Best Seller',
};
const MenuItem = ({ menu }: MenuItemWrapperProps) => {
  const displayTag = menu.tag ? tag[menu.tag as TagKeys] : tag.must_try;
  return (
    <div className="ml-10 flex w-1/2 flex-col items-start  justify-center">
      <div className="flex flex-row">
        <i className="fas fa-seedling text-custom-green-500" />
        <p className="p-1 text-xs text-red-500">{displayTag}</p>
      </div>
      <p className="text-wrap p-1 text-lg text-gray-900">{menu.name}</p>
      <p className="p-2 text-xs text-gray-500">Rs. {menu.price}</p>
      <div className="flex flex-row">
        <StarRating rating={2.5} />
        <p className=" -mt-1 ml-6 p-1 text-xs text-red-500">2.5</p>
        <p className="-mt-1 ml-1 p-1 text-xs text-gray-500">(78)</p>
      </div>
    </div>
  );
};
export default MenuItem;
