import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import TodoList from "../pages/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="TodoList/:id" element={<TodoList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
