import Todolist from "./codeSpace/Todolist";
import { useEffect, useState } from "react";
import Apirequest from "./codeSpace/apiReq";

function App() {
  const API_URL = "http://localhost:5174/items";
  const [lists, setItems] = useState([]); // use ||,  {} || [], if your using API or Localstorage for inserting input.

  const [newItem, setNewitem] = useState("");
  // search bar
  const [search, setSearch] = useState("");
  // errors
  const [fetchErr, setFetcherr] = useState(null);
  // for loading process
  const [isLoading, setIsloading] = useState(true);
  // api PROCESS
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not found...");
        const listItems = await response.json();
        setItems(listItems);
        setFetcherr(null); //If everythinf works fine, this will work..
      } catch (err) {
        setFetcherr(err.message);
      } finally {
        setIsloading(false);
      }
    };

    (async () => await fetchItem())();
  }, []);
  // WORKSPACE
  const addItems = async (work) => {
    const id = lists.length ? lists[lists.length - 1].id + 1 : 1;
    const addNew = { id, work, done: false };
    const listItems = [...lists, addNew];
    setItems(listItems);
    // creating new item and sending files to json
    const postOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addNew),
    };
    const result = await Apirequest(API_URL, postOpt);
    if (result) setFetcherr(result);
  };

  const submitted = (e) => {
    e.preventDefault();
    addItems(newItem);
    setNewitem("");
  };

  const checks = async (id) => {
    const listItems = lists.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setItems(listItems);
    // seperating the item to update
    const uptItem = listItems.filter((item) => item.id === id);
    // updating an item in json
    const uptOpt = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ done: uptItem[0].done }),
    };
    const urlId = `${API_URL}/${id}`;
    const result = await Apirequest(urlId, uptOpt);
    if (result) setFetcherr(result);
  };

  const deletes = async (id) => {
    const listItems = lists.filter((item) => item.id !== id);
    setItems(listItems);
    // deleting an item in json
    const delOpt = {
      method: "DELETE",
    };
    const urlId = `${API_URL}/${id}`;
    const result = await Apirequest(urlId, delOpt);
    if (result) setFetcherr(result);
  };

  return (
    <div className="mains p-2 mx-auto w-full min-h-screen bg-black text-white">
      {/* <Content name="Vigneshwaran Ravi" />
			<Header />
			<Educat /> */}
      <Todolist
        newItem={newItem}
        setNewitem={setNewitem}
        submitted={submitted}
        lists={lists.filter((item) =>
          item.work.toLowerCase().includes(search.toLowerCase())
        )}
        checks={checks}
        deletes={deletes}
        search={search}
        setSearch={setSearch}
        fetchErr={fetchErr}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
