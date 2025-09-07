import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="app-header">
        <div className="logo-container">
          <div className="header-left"><img src="/images/logo.jpeg" alt="Company Logo" className="logo" /></div>
          <div className="header-right"><h1>SOLOLIFE GREEN ENERGY PVT LTD</h1>
            <p>Renewable Energy Solutions for a Sustainable Future</p></div>
        </div>
    </header>
  );
};

export default Header;
