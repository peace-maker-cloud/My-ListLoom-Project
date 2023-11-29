import { SignLogiIn } from "./signLogiIn";
import { Content } from "./Content";
import { useState } from "react";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./workPage/taskComponents/searchBar";
import { Inputlist } from "./workPage/taskComponents/inputlist";
import { Calendar } from "./workPage/calendar";

export const AppUI = ({
  show,
  setShow,
  action,
  setAction,
  logged,
  setLogged,
  userTask,
  newitem,
  setNewitem,
  search,
  setSearch,
  fetchErr,
  isLoading,
  submitted,
  fullName,
  setFullName,
  firstLetter,
  username,
  setUsername,
  password,
  setPassword,
  greet,
  handleSubmit,
  handleLogin,
  handleLogout,
  credentials,
  setCredentials,
  uservalidate,
  passvalidate,
  namevalidate,
  setUservalidate,
  setPassvalidate,
  setNamevalidate,
  checks,
  deletes,
  currentMonth,
  today,
  setToday,
  selectDate,
  setSelectDate,
}) => {
  // codeSpace
  // for Profile visibility
  const [visible, setVisible] = useState(false);
  const [go, setGo] = useState("Task");

  const [Cal, setCal] = useState("hidden");
  const navigate = useNavigate();

  useEffect(() => {
    if (go === "List") {
      navigate("/listwork");
    } else {
      navigate("/taskwork");
    }
  }, [go, navigate]);

  return (
    <div className="heading md:mx-auto md:rounded-md bg-slate-400 md:p-3 p-1 md:w-3/5 outline-none h-screen flex flex-col justify-between">
      <div className="header ">
        <div className="navbar flex md:justify-between justify-around border-b-2">
          <img
            className="md:w-[25%] w-[30%] h-[50%] mt-2 gap-2 p-2"
            src="src\assets\Images\listloom logo.png"
            alt="listloom png"
          />
          <h1 className="greeting text-white md:text-xl md:font-bold font-semibold my-auto text-center">
            {logged === "Signed Out" ? "HI," : `${greet} ${fullName}`}
          </h1>
          <div className="bg-white md:w-[10%] w-[15%]  rounded-full cursor-pointer">
            {logged === "Signed Out" ? (
              <img
                className="sign_in_up cursor-auto"
                src="src\assets\Images\login logo.png"
                alt=""
              />
            ) : (
              <div
                onMouseOver={() => {
                  setVisible(true);
                }}
                onMouseLeave={() => {
                  setVisible(false);
                }}
              >
                <p className="relative md:top-6 top-3 md:text-7xl text-5xl text-center">
                  {firstLetter.toUpperCase()}
                </p>
                {logged === "Signed In" ? (
                  <div
                    id="profile"
                    className={`absolute md:top-[12%] top-[7%] md:left-[72%] left-[70%] flex flex-col gap-2 bg-slate-100 p-3 px-6 rounded-md outline-none z-50 ${
                      visible ? "" : "hidden"
                    }`}
                  >
                    <p className="text-xl border-b-2 border-b-slate-300">
                      {username}
                    </p>
                    <p
                      onClick={() => {
                        handleLogout(username);
                        setVisible(false);
                        setAction("Sign In");
                        setShow("hidden");
                      }}
                      className="text-xl border-b-2 border-b-slate-300 hover:text-sky-500"
                    >
                      Log Out
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Be careful with Content div */}
      <>
        {logged === "Signed Out" ? (
          <div className="bg-slate-300 md:rounded md:min-h-[80%] min-h-[90%] md:p-2 ">
            <SignLogiIn
              action={action}
              setAction={setAction}
              logged={logged}
              setLogged={setLogged}
              fullName={fullName}
              setFullName={setFullName}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              handleLogin={handleLogin}
              credentials={credentials}
              setCredentials={setCredentials}
              uservalidate={uservalidate}
              passvalidate={passvalidate}
              namevalidate={namevalidate}
              setUservalidate={setUservalidate}
              setPassvalidate={setPassvalidate}
              setNamevalidate={setNamevalidate}
            />
          </div>
        ) : (
          <>
            <div>
              {go === "List" ? (
                <div className=" list work flex"></div>
              ) : (
                <div className="flex md:flex-row flex-col justify-around gap-5 self-center">
                  <div
                    onClick={() => {
                      setShow("");
                    }}
                    className="text-center md:mx-0 mx-auto mt-5 p-2 md:w-[20%] w-[80%] bg-cyan-700 text-white rounded-md cursor-pointer h-10"
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
                  <div className=" flex p-1 md:w-4/5 h-fit">
                    <i
                      onClick={() => {
                        setCal("");
                      }}
                      className="uil uil-calendar-alt text-4xl md:mt-2 mt-2 md:pt-1 rounded-xl text-black text-center md:w-[6%] w-[10%] p-1 h-[20%] bg-white shadow-inner shadow-blue-700 transition-all"
                    ></i>

                    <SearchBar search={search} setSearch={setSearch} />
                  </div>
                  <div
                    className={`absolute bg-white text-black md:top-[25%] top-[28%] md:left-[25%] p-4 md:w-[25%] h-fit md:h-fit w-[60%] rounded-lg pt-8 transition-all ${
                      Cal === "hidden" ? "hidden" : ""
                    } `}
                  >
                    <i
                      onClick={() => setCal("hidden")}
                      className="uil uil-times text-3xl absolute md:left-[90%] left-[85%] bottom-[88%] transition-all cursor-pointer"
                    ></i>
                    <div>
                      <Calendar
                        currentMonth={currentMonth}
                        today={today}
                        setToday={setToday}
                        selectDate={selectDate}
                        setSelectDate={setSelectDate}
                        setCal={setCal}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="content bg-slate-300 rounded min-h-[65%] overflow-y-auto p-2 hide-scrollbar">
              <Content
                userTask={userTask.filter((item) =>
                  item.work.toLowerCase().includes(search.toLowerCase())
                )}
                newitem={newitem}
                setNewitem={setNewitem}
                search={search}
                setSearch={setSearch}
                fetchErr={fetchErr}
                isLoading={isLoading}
                submitted={submitted}
                go={go}
                setGo={setGo}
                checks={checks}
                deletes={deletes}
              />
            </div>
          </>
        )}
      </>

      {/* Be Careful with Content div */}
      {logged === "Signed In" ? (
        <div className="footer flex gap-0 justify-center border-t-2 p-2">
          <Link
            to="/listwork"
            className="text-center bg-transparent border-r-2 border-l-2 border-l-slate-300 rounded-l-md border-r-slate-300  p-1 px-3  text-2xl text-black hover:text-white w-full"
            onClick={() => {
              setGo("List");
            }}
          >
            List
          </Link>

          <Link
            to="/taskwork"
            className="text-center bg-transparent border-r-2 border-l-2 border-l-slate-300  border-r-slate-300 rounded-r-md p-1 px-3 text-2xl text-black hover:text-white w-full"
            onClick={() => {
              setGo("Task");
            }}
          >
            Task
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
