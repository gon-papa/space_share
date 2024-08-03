"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = function () {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(135deg, #007adf 0%, #00ecbc 40%, #7b1fa2 70%, #f5a623 100%)",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SS Space Share
          </Typography>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
