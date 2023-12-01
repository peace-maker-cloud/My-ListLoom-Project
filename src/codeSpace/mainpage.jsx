import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Content } from "./Content";
import { Calendar } from "./workPage/taskComponents/calendar";
import { CalendarL } from "./workPage/listComponents/calendarL";
import { Inputlist } from "./workPage/taskComponents/inputlist";
import { SearchBar } from "./workPage/taskComponents/searchBar";
import { InputList } from "./workPage/listComponents/InputList";
import { Searchlist } from "./workPage/listComponents/Searchlist";

export const Mainpage = ({
  go,
  setGo,
  show,
  setShow,
  search,
  setSearch,
  newitem,
  setNewitem,
  currentMonth,
  today,
  setToday,
  selectDate,
  setSelectDate,
  Cal,
  setCal,
  userTask,
  fetchErr,
  isLoading,
  submitted,
  checks,
  deletes,
  lCal,
  SetLCal,
  userList,
  ipShow,
  setIpShow,
  newList,
  setNewList,
  newPara,
  setNewPara,
  searchList,
  setSearchList,
  submitList,
  checkList,
  deleteList,
}) => {
  return (
    <>
      <div>
        {go === "List" ? (
          <div className="listwork flex md:flex-row flex-col justify-around self-center">
            <div
              onClick={() => {
                setIpShow("");
              }}
              className="text-center mx-auto m-2 p-2 w-[80%] bg-cyan-700 text-white rounded-md cursor-pointer h-10"
            >
              <button>Add new Note</button>
            </div>
            <div
              className={`top-[12%] left-[3%] absolute w-[95%] h-[70%] p-2 bg-slate-200 mx-auto pt-7 rounded-md z-20 ${
                ipShow === "hidden" ? "hidden" : ""
              }`}
            >
              <InputList
                setIpShow={setIpShow}
                newList={newList}
                setNewList={setNewList}
                newPara={newPara}
                setNewPara={setNewPara}
                submitList={submitList}
              />
            </div>
            <div className=" flex p-1 md:w-4/5 h-fit">
              <i
                onClick={() => {
                  SetLCal("");
                }}
                className="uil uil-calendar-alt text-3xl p-1 mt-2 rounded-xl text-black text-center w-[13%] h-[20%] bg-white shadow-inner shadow-blue-700 transition-all"
              ></i>
              <Searchlist
                searchList={searchList}
                setSearchList={setSearchList}
              />
            </div>
            <div
              className={`absolute bg-white text-black top-[20%] p-3 h-fit w-[95%] rounded-lg pt-8 transition-all ${
                Cal === "hidden" ? "hidden" : ""
              } `}
            >
              <i
                onClick={() => SetLCal("hidden")}
                className="uil uil-times text-3xl absolute left-[90%] bottom-[91%] transition-all cursor-pointer"
              ></i>
              <div>
                <CalendarL
                  currentMonth={currentMonth}
                  today={today}
                  setToday={setToday}
                  selectDate={selectDate}
                  setSelectDate={setSelectDate}
                  setLCal={SetLCal}
                  setSearchList={setSearchList}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex md:flex-row flex-col justify-around self-center">
            <div
              onClick={() => {
                setShow("");
              }}
              className="text-center mx-auto m-2 p-2 w-[80%] bg-cyan-700 text-white rounded-md cursor-pointer h-10"
            >
              <button>Add new Task</button>
            </div>
            <div
              className={`md:top-[15%] top-[10%] md:left-[20%] left-[5%] absolute md:w-[30%] w-[90%] md:h-[8%] h-[10%] p-2 bg-slate-200 mx-auto pt-7 rounded-md ${
                show === "hidden" ? "hidden" : ""
              }`}
            >
              <Inputlist
                newitem={newitem}
                setNewitem={setNewitem}
                submitted={submitted}
                show={show}
                setShow={setShow}
              />
            </div>
            <div className=" flex p-2 h-fit">
              <i
                onClick={() => {
                  setCal("");
                }}
                className="uil uil-calendar-alt text-3xl p-1 mt-2 rounded-xl text-black text-center w-[13%] h-[20%] bg-white shadow-inner shadow-blue-700 transition-all"
              ></i>

              <SearchBar search={search} setSearch={setSearch} />
            </div>
            <div
              className={`absolute bg-white text-black top-[20%] p-3 h-fit w-[95%] rounded-lg pt-8 transition-all ${
                Cal === "hidden" ? "hidden" : ""
              } `}
            >
              <i
                onClick={() => setCal("hidden")}
                className="uil uil-times text-3xl absolute left-[90%] bottom-[91%] transition-all cursor-pointer"
              ></i>
              <div>
                <Calendar
                  currentMonth={currentMonth}
                  today={today}
                  setToday={setToday}
                  selectDate={selectDate}
                  setSelectDate={setSelectDate}
                  setCal={setCal}
                  setSearch={setSearch}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content bg-slate-300 rounded h-[73%] overflow-y-auto p-2 hide-scrollbar scroll-smooth">
        <Content
          go={go}
          setGo={setGo}
          userTask={userTask}
          fetchErr={fetchErr}
          isLoading={isLoading}
          checks={checks}
          deletes={deletes}
          userList={userList}
          ipShow={ipShow}
          setIpShow={setIpShow}
          newList={newList}
          setNewList={setNewList}
          newPara={newPara}
          setNewPara={setNewPara}
          searchList={searchList}
          setSearchList={setSearchList}
          submitList={submitList}
          checkList={checkList}
          deleteList={deleteList}
        />
      </div>
    </>
  );
};
