/* eslint-disable react/prop-types */
const Listitems = ({ lists, fetchErr, isLoading, checks, deletes }) => {
  return (
    <>
      {isLoading && (
        <p className="text-4xl text-center p-5">Loading Items...</p>
      )}
      {fetchErr && (
        <p className="text-4xl text-center p-5">{`Error : ${fetchErr}`}</p>
      )}
      {!fetchErr && !isLoading && (
        <div className="font-semibold text-4xl p-2 m-[15px]">
          {lists.length ? (
            <ul className="flex flex-col gap-2 ">
              {lists.map((item) => (
                <li
                  key={item.id}
                  className=" flex items-center justify-between gap-6 w-full"
                >
                  <input
                    onChange={() => checks(item.id)}
                    className="w-8 h-8"
                    type="checkbox"
                    name=""
                    id=""
                    checked={item.done}
                  />

                  <label
                    style={
                      item.done ? { textDecoration: "line-through" } : null
                    }
                    className="text-center"
                    htmlFor=""
                  >
                    {item.work}
                  </label>
                  <i
                    onClick={() => deletes(item.id)}
                    className="uil uil-trash text-5xl text-black hover:text-white"
                  ></i>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-2xl text-center p-5">You have an Empty list</p>
          )}
        </div>
      )}
    </>
  );
};
export default Listitems;
