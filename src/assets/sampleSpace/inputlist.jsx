import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const Inputlist = ({ newItem, setNewitem, submitted }) => {
  const inputRef = useRef();
  return (
    <form onSubmit={submitted} className=" w-full flex p-1 border-b-2">
      <input
        className="m-1 w-1/2 h-10 p-3 bg-transparent text-white text-2xl outline-none border-r-[1px] border-gray-400 rounded-sm placeholder-white flex flex-grow"
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        required
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewitem(e.target.value)}
      />
      <button
        className="mx-auto w-1/5 hover:bg-orange-600 transition duration-300 rounded-md text-white hover:text-black"
        type="submit"
      >
        <i
          onClick={() => inputRef.current.focus()}
          className="text-4xl uil uil-plus"
        ></i>
      </button>
    </form>
  );
};
export default Inputlist;
