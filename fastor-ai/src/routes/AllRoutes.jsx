import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import VerifyOtp from "../Pages/VerifyOtp";
import Home from "../Pages/Home";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/sendotp" element={<Register />} />
      <Route path="/verifyOtp" element={<VerifyOtp />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
