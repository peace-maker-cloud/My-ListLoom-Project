import React, { useState } from "react";

export const Listthelist = ({ userList, fetchErr, isLoading, deleteList }) => {
  // console.log(userList);

  const [openFile, setOpenFile] = useState("hidden");
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <>
      {isLoading && (
        <p className="text-4xl text-center p-5">Loading Items...</p>
      )}
      {fetchErr && (
        <p className="text-4xl text-center p-5">{`Error : ${fetchErr} please refresh once..`}</p>
      )}
      {!fetchErr && !isLoading && (
        <>
          <div className="pending tasks md:mx-auto mb-3 md:w-3/5 md:text-2xl text-xl p-2">
            {userList.length ? (
              <>
                <ul className="flex flex-col ">
                  {userList.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-6 w-full  border-b-2"
                    >
                      <div className="md:pt-2 pt-2 border-r-2 h-full">
                        <i
                          key={item.id}
                          className="uil uil-book-open p-1 transition-all"
                          onClick={() => {
                            setOpenFile("");
                            setSelectedItemId(item.id);
                          }}
                        ></i>
                        {selectedItemId === item.id && (
                          <div
                            className={`display absolute top-[12%] right-0 bg-white rounded-md m-1 p-2 w-[98%] h-[75%] transition-all ${
                              openFile === "hidden" ? "hidden" : ""
                            }`}
                          >
                            <div className=" border-b-2 p-1">
                              <div className="heading ">
                                <textarea
                                  className="m-1 p-1 text-2xl border-b-2 w-[96%]"
                                  value={item.heading}
                                  rows={1}
                                  readOnly
                                  style={{ resize: "none" }}
                                ></textarea>
                              </div>
                              <div className="date with edit flex justify-between">
                                <div className="text-base">{item.date}</div>
                                <div className="flex flex-row justify-between gap-6">
                                  <i className="uil uil-edit text-2xl"></i>
                                  <i
                                    onClick={() => {
                                      setOpenFile("hidden");
                                    }}
                                    className="uil uil-check text-2xl"
                                  ></i>
                                </div>
                              </div>
                            </div>
                            <div className="paragraph h-[78%]">
                              <textarea
                                className="m-1 p-1 text-base h-[98%] w-[98%]"
                                value={item.newWork}
                                readOnly
                                style={{ resize: "none" }}
                              ></textarea>
                            </div>
                          </div>
                        )}
                      </div>
                      <label
                        data-value={item.heading}
                        className="text-2xl font-semibold"
                      >
                        {item.heading}
                      </label>
                      <i
                        onClick={() => deleteList(item.id, userTask)}
                        className="uil uil-trash text-3xl text-black hover:text-red-500"
                      ></i>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-2xl text-center p-5">You have an Empty list</p>
            )}
          </div>
        </>
      )}
    </>
  );
};
