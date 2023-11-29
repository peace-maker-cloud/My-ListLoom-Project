/* eslint-disable react/prop-types */
const Searchbar = ({ search, setSearch }) => {
  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
      <input
        className="mt-1 mx-auto w-3/5 h-10 p-3 bg-transparent text-black text-2xl outline-none border-b-[1px] border-white rounded-sm flex flex-grow"
        type="text"
        role="searchBar"
        id=""
        placeholder="Search Items.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
export default Searchbar;
