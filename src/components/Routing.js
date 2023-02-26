import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Customer from "./Customer";
import Home from "./Home";
// import AddProducts from "./AddProducts";
// import Admin from "./Admin";
// import Customer from "./Customer";
// import Home from "./Home";
import Login from "./Login";
// import UpdateModalForm from "./UpdateModalForm";
// import ViewAllProducts from "./ViewAllProducts";
// import ViewProduct from "./ViewProduct";

function Routing() {

   
  return (
    <Routes>
      {/* <Route path="/viewAllProducts" element={<ViewAllProducts />} />
      <Route path="/edit/:id" element={<UpdateModalForm />} />
      <Route path="/view/:id" element={<ViewProduct />} /> */}
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/addProduct" element={<AddProducts />} /> */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/customer" element={<Customer />} /> 
    </Routes>
  );
}

export default Routing;
