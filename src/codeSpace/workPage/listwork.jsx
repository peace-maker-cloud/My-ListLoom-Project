import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Listthelist } from "./listComponents/listthelist";

export const Listwork = ({ userList, fetchErr, isLoading, deleteList }) => {
  return (
    <div className="p-1">
      <Listthelist
        userList={userList}
        fetchErr={fetchErr}
        isLoading={isLoading}
        deleteList={deleteList}
      />
    </div>
  );
};
