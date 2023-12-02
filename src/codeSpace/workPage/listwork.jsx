import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Listthelist } from "./listComponents/listthelist";

export const Listwork = ({
  userList,
  fetchErr,
  isLoading,
  newList,
  setNewList,
  newPara,
  setNewPara,
  editor,
  setEditor,
  saveList,
  deleteList,
}) => {
  return (
    <div className="p-1">
      <Listthelist
        userList={userList}
        fetchErr={fetchErr}
        isLoading={isLoading}
        newList={newList}
        setNewList={setNewList}
        newPara={newPara}
        setNewPara={setNewPara}
        editor={editor}
        setEditor={setEditor}
        saveList={saveList}
        deleteList={deleteList}
      />
    </div>
  );
};
