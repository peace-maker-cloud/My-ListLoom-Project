/* eslint-disable react/prop-types */

import Inputlist from "./inputlist";
import Listitems from "./listitems";
import Searchbar from "./searchBar";
// eslint-disable-next-line react/prop-types
const Todolist = ({
  newItem,
  setNewitem,
  submitted,
  lists,
  checks,
  deletes,
  search,
  setSearch,
  fetchErr,
  isLoading,
}) => {
  return (
    <>
      <div className="mx-auto bg-orange-500 rounded-md w-2/4">
        <h1 className="mx-auto text-center font-bold text-6xl border-b-2 w-3/5 ">
          To Do List
        </h1>
        <Inputlist
          newItem={newItem}
          setNewitem={setNewitem}
          submitted={submitted}
        />
        <Searchbar search={search} setSearch={setSearch} />
        <Listitems
          fetchErr={fetchErr}
          isLoading={isLoading}
          checks={checks}
          deletes={deletes}
          lists={lists}
        />
        <div className="mx-auto text-center text-4xl border-t-2 p-2">
          <p>
            you have {lists.length} {lists.length <= 1 ? "item" : "items"}
          </p>
        </div>
      </div>
    </>
  );
};
export default Todolist;
