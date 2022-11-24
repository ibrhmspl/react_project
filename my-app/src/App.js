import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import CategoryManagement from "./components/CategoryManagement"
import ProductManagement from "./components/ProductManagement"
import Products from "./components/Products"
import ShopingCard from "./components/ShopingCard"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated ) {
    return children
  }
    
  return <Navigate to="/" />
}

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login/>}/>
        <Route path="Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
          <Route path="CategoryManagement" element={<PrivateRoute><CategoryManagement /></PrivateRoute>} />
          <Route path="ProductManagement" element={<PrivateRoute><ProductManagement /></PrivateRoute>} />
          <Route path="Products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="ShopingCard" element={<PrivateRoute><ShopingCard /></PrivateRoute>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
