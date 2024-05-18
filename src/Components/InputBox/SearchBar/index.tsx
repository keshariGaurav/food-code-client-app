const SearchBar = () => {
  return (
    <div className="relative mb-2 mt-2 flex w-1/4 items-center justify-center">
      <input
        className="mb-3 block w-full appearance-none rounded-2xl border border-gray-300 bg-green-50 px-4 py-3 leading-tight text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-100"
        type="text"
        placeholder="Search cuisines or food items"
      />
      <button className="absolute right-3 top-1/3 mt-1 -translate-y-1/2 transform p-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:transform">
        <i className="fa-solid fa-magnifying-glass text-gray-700"></i>
      </button>
    </div>
  );
};

export default SearchBar;
