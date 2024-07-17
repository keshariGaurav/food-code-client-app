import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Your Cart is Empty</h1>
        <p className="mt-4 text-lg text-gray-600">
          Let our menus tempt your taste buds and delight your senses.
        </p>
        <button
          onClick={() => {
            navigate('/');
          }}
          className="mt-8 rounded-lg bg-custom-green-500 px-6 py-3 text-lg font-semibold text-white hover:bg-custom-green-600"
        >
          Menus
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
