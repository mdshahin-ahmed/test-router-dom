import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardRoute from "../routes/DashboardRoute";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar></Sidebar>
      <div className="ms-5">
        {" "}
        <DashboardRoute></DashboardRoute>
      </div>
    </div>
  );
};

export default Dashboard;
