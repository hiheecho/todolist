import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import DetailTodo from "../pages/DetailTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailTodo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
