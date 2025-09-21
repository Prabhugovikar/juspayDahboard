import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="cover-container">
      {/* Gradient Glows */}
      <div className="glow glow-green"></div>
      <div className="glow glow-purple"></div>

      {/* Grid (must be above glow, but below text) */}
  <div className="grid-top-left"></div>

      {/* Content */}
      <div className="cover-content">
        {/* Tag */}
        <div className="assignment-tag">ASSIGNMENT</div>

        {/* Title */}
        <h1 className="cover-title">
          UI DEVELOPER <br /> ASSIGNMENT
        </h1>

        {/* Company Info */}
        <div className="company-info">
          <p className="label">COMPANY</p>
          <p className="company-name">Juspay Technologies Private Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
