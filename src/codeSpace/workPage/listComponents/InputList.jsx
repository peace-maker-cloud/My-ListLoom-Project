import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

export const InputList = ({
  ipShow,
  setIpShow,
  newList,
  setNewList,
  newPara,
  setNewPara,
  submitList,
}) => {
  const ipListRef = useRef();
  return (
    <div className={`h-full ${ipShow === "hidden" ? "hidden" : ""}`}>
      <div>
        <i
          onClick={() => {
            setIpShow("hidden");
          }}
          className="close text-3xl absolute top-[3%] left-[90%] uil uil-times-square hover:text-red-400"
        ></i>
      </div>
      <>
        <form
          onSubmit={submitList}
          className="w-[90%] flex flex-col border-b-2 gap-3 h-[90%]"
        >
          <div className="mx-auto w-[90%]">
            <input
              className=" w-[60%] h-10 ml-0 p-4 bg-white text-black text-xl outline-none  border-gray-400 rounded-sm placeholder-gray-400"
              type="text"
              autoFocus
              name=""
              id="addLiItem"
              required
              placeholder="Heading.."
              value={newPara}
              onChange={(e) => {
                setNewPara(e.target.value);
              }}
            />
          </div>
          <div className="flex h-[100%]">
            <textarea
              className="paragraph w-[80%] h-[90%] p-3 bg-white text-black text-xl outline-none border-gray-400 rounded-sm placeholder-gray-400 flex flex-grow"
              autoFocus
              required
              ref={ipListRef}
              id="addItem"
              placeholder="Body Content.."
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
              style={{ resize: "none" }}
            />

            <button
              className="mx-auto w-[15%] h-fit hover:bg-blue-600 transition duration-300 rounded-md text-black hover:text-white"
              type="submit"
            >
              <i
                onClick={() => {
                  ipListRef.current.focus();
                }}
                className="text-3xl uil uil-plus"
              ></i>
            </button>
          </div>
        </form>
      </>
    </div>
  );
};
