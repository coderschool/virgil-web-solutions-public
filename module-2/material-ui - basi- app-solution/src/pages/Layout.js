import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Navigation />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;
