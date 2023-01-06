import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
