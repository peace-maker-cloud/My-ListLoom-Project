import React, { useEffect } from "react";
import { Listwork } from "./workPage/listwork";
import { Taskwork } from "./workPage/taskwork";
import { Routes, Route, useNavigate } from "react-router-dom";

export const Content = ({
  userTask,
  fetchErr,
  isLoading,
  go,
  checks,
  deletes,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (go === "List") {
      navigate("/listwork");
    } else {
      navigate("/taskwork");
    }
  }, [go, navigate]);

  return (
    <div className="mx-auto flex flex-col justify-between">
      <div>
        <Routes>
          <Route path="/listwork" element={<Listwork />} />
          <Route
            path="/taskwork"
            element={
              <Taskwork
                userTask={userTask}
                fetchErr={fetchErr}
                isLoading={isLoading}
                checks={checks}
                deletes={deletes}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
