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
  ipShow,
  setIpShow,
  newList,
  setNewList,
  newPara,
  setNewPara,
  searchList,
  setSearchList,
  submitList,
}) => {
  return (
    <div className="mx-auto flex flex-col justify-between">
      {go === "List" ? (
        <>
          <Listwork
            ipShow={ipShow}
            setIpShow={setIpShow}
            newList={newList}
            setNewList={setNewList}
            newPara={newPara}
            setNewPara={setNewPara}
            searchList={searchList}
            setSearchList={setSearchList}
            submitList={submitList}
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
