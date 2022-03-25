import React, { useContext } from "react";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { colors } from "../../../assets/colors/colors";
import { SearchContext } from "context/searchContext";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: `1px solid ${colors.greyLight2}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  paddingLeft: "10px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
  },
}));

export const SearchaBar = () => {
  const { searchBarValue, handleSearchBarChange } = useContext(SearchContext);

  return (
    <Search sx={{ margin: { xs: "20px 0" } }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        value={searchBarValue}
        onChange={(e) => handleSearchBarChange(e)}
      />
    </Search>
  );
};
