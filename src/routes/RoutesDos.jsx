import React from "react";
import { Routes, Route } from "react-router-dom";
import EditScreen from "../pages/EditScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import PostScreen from "../pages/PostScreen";

const RoutesDos = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/edit" element={<EditScreen />} />
      <Route path="/post/:id" element={<PostScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RoutesDos;
