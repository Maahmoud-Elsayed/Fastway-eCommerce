import { BsSearch } from "react-icons/bs";

const Search = () => {
  const searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={searchHandler}
      className=" lg:absolute sm:w-[332px] grow lg:right-8 lg:bottom-[-41px] z-10 "
    >
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:outline-none focus:ring-1 focus:border-none  focus:ring-indigo-600  "
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-indigo-600 rounded-r-lg  hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-600"
          >
            <BsSearch className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
