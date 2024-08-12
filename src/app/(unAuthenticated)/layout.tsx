import React from "react";
import { ReactNode } from "react";
import { Header } from "../../components/common/header";
import { Footer } from "../../components/common/footer";
import "../../styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
