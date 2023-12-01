import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Listthelist } from "./listComponents/listthelist";

export const Listwork = ({
  userList,
  fetchErr,
  isLoading,
  checkList,
  deleteList,
}) => {
  return (
    <div className="p-1">
      <Listthelist
        userList={userList}
        fetchErr={fetchErr}
        isLoading={isLoading}
        checkList={checkList}
        deleteList={deleteList}
      />
    </div>
  );
};
