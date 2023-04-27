import { FiSearch } from "react-icons/fi";

function InputSearch({ ...props }) {
  return (
    <div className="flex items-center max-w-xs w-full border-b-2 border-gray-200 py-2 mb-6 focus-within:border-red-500">
      <FiSearch />
      <input
        type="text"
        placeholder="Search"
        className="border-none focus:outline-none ml-2 flex-1 bg-transparent text-white"
        {...props}
      />
    </div>
  );
}

export default InputSearch;
