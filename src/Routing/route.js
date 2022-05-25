import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/login";
import Header from "../Pages/header";
import ChangePassword from "../Pages/changePassword";
import CrewDailyRoster from "../Pages/crewDailyRoster";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home/" element={<Header />}>
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="CrewDailyRoster" element={<CrewDailyRoster />} />
        </Route>
      </Routes>
    </>
  );
};
export default Routing;
