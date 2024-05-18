import StarRating from '../StarRating';

const MenuItem = () => {
  return (
    <div className="ml-10 flex w-1/2 flex-col items-start  justify-center">
      <div className="flex flex-row">
        <i className="fas fa-seedling text-custom-green-500" />
        <p className="p-1 text-xs text-red-500">Best Seller</p>
      </div>
      <p className="text-wrap p-1 text-lg text-gray-900">
        Masala Dosa ( With cruchy base and tangy sambhar )
      </p>
      <p className="p-2 text-xs text-gray-500">Rs. 55</p>
      <div className="flex flex-row">
        <StarRating rating={2.5} />
        <p className=" -mt-1 ml-6 p-1 text-xs text-red-500">3.6</p>
        <p className="-mt-1 ml-1 p-1 text-xs text-gray-500">(78)</p>
      </div>
    </div>
  );
};
export default MenuItem;
