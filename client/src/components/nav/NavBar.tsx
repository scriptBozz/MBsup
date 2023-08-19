import React from "react";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@mui/material";

export default function NavBar() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  let backGroundColor;
  if (theme === "dark") {
    backGroundColor = "black";
  }

  return (
    <Box sx={{ backgroundColor: backGroundColor }}>
      
      <NavItem />
    </Box>
  );
}
