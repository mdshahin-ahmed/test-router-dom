import React from "react";
import { Route, Switch } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const DashboardRoute = () => {
  return (
    <Switch>
      <Route path="/dashboard/add-product">
        <AddProduct></AddProduct>
      </Route>
      <Route path="/dashboard/product-list">
        <ProductList></ProductList>
      </Route>
      <Route path="/dashboard">
        <ProductList></ProductList>
      </Route>
    </Switch>
  );
};

export default DashboardRoute;
