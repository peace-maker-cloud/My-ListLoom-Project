import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Listwork } from "./workPage/listwork";
import { Taskwork } from "./workPage/taskwork";

export const Content = ({
  go,
  setGo,
  userTask,
  fetchErr,
  isLoading,
  checks,
  deletes,
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
  deleteList,
}) => {
  return (
    <div className="mx-auto flex flex-col justify-between">
      {go === "List" ? (
        <>
          <Listwork
            userList={userList}
            fetchErr={fetchErr}
            isLoading={isLoading}
            deleteList={deleteList}
          />
        </>
      ) : (
        <>
          <Taskwork
            userTask={userTask}
            fetchErr={fetchErr}
            isLoading={isLoading}
            checks={checks}
            deletes={deletes}
          />
        </>
      )}
    </div>
  );
};
