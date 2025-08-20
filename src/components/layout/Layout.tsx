import React from "react";

import "./Layout.css";
import ActionNavbar from "../navbar/action-navbar/ActionNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleSearch = (searchQuery: string) => {
    console.log("User searched for:", searchQuery);
  };

  return (
    <div className="app-layout">
      <ActionNavbar onSearch={handleSearch} className="main-navbar" />
      <main className="page-content">{children}</main>
    </div>
  );
};

export default Layout;
