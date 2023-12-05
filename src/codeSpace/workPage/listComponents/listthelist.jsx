import React, { useState } from "react";

export const Listthelist = ({
  userList,
  fetchErr,
  isLoading,
  newList,
  setNewList,
  newPara,
  setNewPara,
  saveList,
  deleteList,
}) => {
  // console.log(userList);

  const [edit, setEdit] = useState(true);
  const [save, setSave] = useState(false);

  const [openFile, setOpenFile] = useState("hidden");
  const [selectedItemId, setSelectedItemId] = useState(null);

  // console.log(selectedItemId);
  // console.log(newPara, newList);
  return (
    <>
      {isLoading && (
        <p className="text-3xl text-center p-5">Loading Items...</p>
      )}
      {fetchErr && (
        <p className="text-4xl text-center p-5">{`Error : ${fetchErr} please refresh once..`}</p>
      )}
      {!fetchErr && !isLoading && (
        <>
          <div className="pending tasks mb-3 text-xl p-2">
            {userList.length ? (
              <>
                <ul className="flex flex-col ">
                  {userList.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-6 w-full border-b-2"
                    >
                      <div className="pt-2 border-r-2 h-full">
                        <i
                          key={item.id}
                          className="uil uil-book-open p-1 transition-all"
                          onClick={() => {
                            setOpenFile("");
                            setSelectedItemId(item.id);
                            setNewPara(item.heading);
                            setNewList(item.newWork);
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
                                  className={`heading m-1 p-1 text-2xl border-b-2 w-[96%] ${
                                    edit ? "readonly" : "editable"
                                  }`}
                                  value={newPara}
                                  rows={1}
                                  readOnly={edit}
                                  onChange={(e) => setNewPara(e.target.value)}
                                ></textarea>
                              </div>
                              <div className="date with edit flex justify-between">
                                <div className="text-base">{item.date}</div>
                                <div className="flex flex-row justify-between gap-6">
                                  <div>
                                    <i
                                      onClick={() => {
                                        setEdit(false);
                                        setSave(true);
                                        setNewPara(item.heading);
                                        setNewList(item.newWork);
                                      }}
                                      className={`uil uil-edit text-2xl ${
                                        edit === true ? "" : "hidden"
                                      }`}
                                    ></i>
                                    <i
                                      onClick={() => {
                                        setEdit(true);
                                        setSave(false);
                                        saveList(
                                          selectedItemId,
                                          newPara,
                                          newList
                                        );
                                      }}
                                      className={`uil uil-save text-2xl ${
                                        save === false ? "hidden" : ""
                                      }`}
                                    ></i>
                                  </div>

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
                                className={`paragraph m-1 p-1 text-base h-[98%] w-[98%] ${
                                  edit ? "readonly" : "editable"
                                }`}
                                value={newList}
                                readOnly={edit}
                                onChange={(e) => setNewList(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                        )}
                      </div>
                      <label
                        data-value={item.heading}
                        className="text-base text-center"
                      >
                        {item.heading}
                      </label>
                      <i
                        onClick={() => deleteList()}
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
