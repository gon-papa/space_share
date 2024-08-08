"use client";
import { Box } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import { Header } from "../../components/common/header";
import { Footer } from "../../components/common/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
