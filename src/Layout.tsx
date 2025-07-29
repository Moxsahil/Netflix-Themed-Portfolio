import React from "react";
import Navbar from "./components/NavBar";
import { Toaster } from "sonner"; // ✅ import Sonner

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={3000}
      />{" "}
      {/* ✅ Add Toaster once */}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
