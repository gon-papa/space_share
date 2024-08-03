"use client";
import { Box } from "@mui/material";
import React from "react";
import { ReactNode } from "react";
import { Header } from "../../components/share/header";
import { Footer } from "../../components/share/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
