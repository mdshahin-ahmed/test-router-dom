import React from "react";
import { useHistory, useLocation } from "react-router";

const Sidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <span onClick={() => history.push("/dashboard/add-product")}>
        Add Product
      </span>
      <br></br>
      <span onClick={() => history.push("/dashboard/product-list")}>
        Product List
      </span>
    </div>
  );
};

export default Sidebar;
