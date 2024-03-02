import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import VerifyOtp from "../Pages/VerifyOtp";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/verifyOtp" element={<VerifyOtp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
