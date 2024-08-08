"use client";

import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import React from "react";

export const Footer = function () {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(135deg, #f5a623 0%, #7b1fa2 30%, #00ecbc 60%, #007adf 100%)",
          top: "auto", // 下部に固定
          bottom: 0, // 下部に固定
        }}
      >
        <Toolbar>
          <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
            © 2024 SS Space Share. All Rights Reserved.
          </Typography>
          <Box>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ marginRight: 2 }}
            >
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
