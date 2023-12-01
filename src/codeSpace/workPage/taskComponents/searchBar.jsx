import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const SearchBar = ({ search, setSearch }) => {
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="w-full flex items-center bg-white rounded-lg">
      <form className="p-1 w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="mt-1 mx-auto w-full h-10 p-3 bg-white text-black text-2xl outline-none border-[1px] border-white rounded-2xl  flex flex-grow"
          type="text"
          role="searchBar"
          id=""
          placeholder="Search Items or Dates.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
