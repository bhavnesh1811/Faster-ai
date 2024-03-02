import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import VerifyOtp from "../Pages/VerifyOtp";
import Home from "../Pages/Home";
import { PrivateRoute } from "./PrivateRoute";
import SingleRestaurant from "../Pages/SingleRestaurant";

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
      <Route
        path="/singleRestaurant/:id"
        element={
          <PrivateRoute>
            <SingleRestaurant />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
