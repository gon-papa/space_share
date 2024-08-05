"use client";
import { Box } from "@mui/material";
import React from "react";
import { useGetApod } from "../../../hooks/unAuthenticated/top/apod-hook";

export default function Top() {
  const data = useGetApod();
  const apodData = data;

  return (
    <div>
      {apodData && <div>{apodData.isSuccess}</div>}
      <Box>top</Box>
    </div>
  );
}
