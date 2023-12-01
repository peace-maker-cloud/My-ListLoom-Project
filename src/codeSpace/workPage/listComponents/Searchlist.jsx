import React from "react";

export const Searchlist = ({ searchList, setSearchList }) => {
  const clearSearch = () => {
    setSearchList("");
  };
  return (
    <div className="w-full flex items-center bg-white rounded-lg">
      <form className="p-1 w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="mx-auto w-full h-10 p-3 bg-white text-black text-2xl outline-none border-[1px] border-white rounded-2xl  flex flex-grow"
          type="text"
          role="searchBar"
          id=""
          placeholder="Search Items or Dates.."
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
        />
      </form>
      <div className="eraser text-3xl text-gray-400 transition-all">
        <i
          onClick={() => {
            clearSearch();
          }}
          className="uil uil-times-circle"
        ></i>
      </div>
    </div>
  );
};
