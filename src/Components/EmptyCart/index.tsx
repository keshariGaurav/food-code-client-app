import { useNavigate } from 'react-router-dom';
import logoImg from '@/assets/images/logo-transparent-png.png';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center  bg-gray-100">
      <div className="text-center">
        <div
          style={{
            width: '120px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
          }}
        >
          <img src={logoImg} alt="Logo Image" width="100%" />
        </div>
        <h3 className="mb-5 text-center text-2xl font-bold">Welcome to Eazy Eats Cafe</h3>
      </div>
      <div className="flex h-screen flex-col items-center justify-center  bg-gray-100">
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
