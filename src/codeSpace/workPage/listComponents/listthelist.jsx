import React from "react";

export const Listthelist = ({ userList, fetchErr, isLoading, deleteList }) => {
  // console.log(userList);
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
                        <i className="uil uil-book-open p-1"></i>
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
