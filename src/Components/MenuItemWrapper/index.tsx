import image from '../../food.png';
import Button from '../AddButton';
import MenuItem from '../MenuItem';

const MenuItemWrapper = () => {
  return (
    <div className="mb-2 mt-2 flex items-center justify-center">
      <div className="flex max-w-sm flex-col rounded-xl border-2 border-gray-200 p-4">
        <div className="flex flex-row">
          <div className="mr-10 flex flex-col items-center justify-center">
            <img src={image} alt="Food" className="rounded-md" />
            <Button className="-mt-2">ADD</Button>
            <p className="p-1 text-xs text-gray-500">Customisable</p>
          </div>
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default MenuItemWrapper;
